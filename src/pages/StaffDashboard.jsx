import React, { useEffect, useState } from "react";
import { auth, signOut, db, collection, addDoc, getDocs, deleteDoc, doc } from "../services/firebase";
import { useNavigate } from "react-router-dom";

const StaffDashboard = () => {
    const [events, setEvents] = useState([]);
    const [eventName, setEventName] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [eventLocation, setEventLocation] = useState("");
    const [eventImage, setEventImage] = useState("");
    const [eventUrl, setEventUrl] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth.currentUser) {
            navigate("/signin");
            return;
        }

        const fetchEvents = async () => {
            const querySnapshot = await getDocs(collection(db, "events"));
            setEvents(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        };

        fetchEvents();
    }, [navigate]);

    const handleCreateEvent = async () => {
        if (!eventName || !eventDate || !eventLocation || !eventImage || !eventUrl) {
            alert("⚠️ Please fill out all fields before creating an event.");
            return;
          }
          

        try {
            const docRef = await addDoc(collection(db, "events"), {
                name: eventName,
                createdBy: auth.currentUser.email,
                eventDate,
                eventLocation,
                eventImage,
                eventUrl
            });

            const newEvent = {
                id: docRef.id,
                name: eventName,
                createdBy: auth.currentUser.email,
                eventDate,
                eventLocation,
                eventImage,
                eventUrl
            };
            
            setEvents((prevEvents) => [...prevEvents, newEvent]);

            alert("✅ Event created successfully!");
            setEventName("");
            setEventDate("");
            setEventLocation("");
            setEventImage("");
            setEventUrl("");
        } catch (error) {
            console.error("🔥 Error creating event:", error);
        }
    };

    const handleDeleteEvent = async (eventId) => {
        try {
            await deleteDoc(doc(db, "events", eventId));

            setEvents((prevEvents) => prevEvents.filter(event => event.id !== eventId));

            alert("✅ Event deleted successfully!");
        } catch (error) {
            console.error("🔥 Error deleting event:", error);
        }
    };

    return (
        <div className="dashboard">
            <h1>Staff Dashboard</h1>
            <p>Welcome, {auth.currentUser?.email}</p>

            <button onClick={() => signOut(auth)}>Sign Out</button>

            <h2>Create New Event</h2>
            <input 
                type="text" 
                placeholder="Event Name" 
                value={eventName} 
                onChange={(e) => setEventName(e.target.value)} 
            />
            <input 
                type="date" 
                placeholder="Event Date" 
                value={eventDate} 
                onChange={(e) => setEventDate(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Event Location" 
                value={eventLocation} 
                onChange={(e) => setEventLocation(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Event Image URL" 
                value={eventImage} 
                onChange={(e) => setEventImage(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Event URL" 
                value={eventUrl} 
                onChange={(e) => setEventUrl(e.target.value)} 
            />
            <button onClick={handleCreateEvent}>Create Event</button>

            <h2>Manage Events</h2>
            {events.length > 0 ? (
                events.map((event) => (
                    <div className="event-card" key={event.id}>
                        <h3>{event.name}</h3>
                        <p><strong>Date:</strong> {event.eventDate}</p>
                        <p><strong>Location:</strong> {event.eventLocation}</p>
                        {event.eventImage && <img src={event.eventImage} alt={event.name} width="200px" loading="lazy" />}
                        <a href={event.eventUrl} target="_blank" rel="noopener noreferrer">View Event</a>
                        <br />
                        <button onClick={() => handleDeleteEvent(event.id)}>❌ Delete</button>
                    </div>
                ))
            ) : (
                <p>No events created yet.</p>
            )}
        </div>
    );
};

export default StaffDashboard;
