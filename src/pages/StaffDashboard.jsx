import React, { useEffect, useState } from "react";
import { auth, signOut, db, collection, addDoc, getDocs, deleteDoc, doc } from "../services/firebase";
import { useNavigate } from "react-router-dom";

const StaffDashboard = () => {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState("");
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
    if (!eventName) return;

    try {
      await addDoc(collection(db, "events"), { name: eventName, createdBy: auth.currentUser.email });
      alert("✅ Event created!");
      setEventName("");
    } catch (error) {
      console.error("🔥 Error creating event:", error);
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      await deleteDoc(doc(db, "events", eventId));
      alert("✅ Event deleted!");
      setEvents(events.filter((event) => event.id !== eventId));
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
        <button onClick={handleCreateEvent}>Create Event</button>

        <h2>Manage Events</h2>
        {events.length > 0 ? (
            events.map((event) => (
                <div className="event-card" key={event.id}>
                    <h3>{event.name}</h3>
                    <p>Created by: {event.createdBy}</p>
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
