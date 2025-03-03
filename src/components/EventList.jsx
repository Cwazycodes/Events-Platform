import React, { useEffect, useState } from "react";
import { fetchEvents } from "../services/ticketmasterAPI";
import { db, collection, getDocs } from "../services/firebase";
import EventCard from "./EventCard";

const EventList = () => {
    const [events, setEvents] = useState([]);
    const [location, setLocation] = useState("New York"); 

    useEffect(() => {
        const loadEvents = async () => {
            // Fetch Ticketmaster events
            const ticketmasterEvents = await fetchEvents(location);

            // Fetch staff-created events from Firebase
            const staffEventsSnapshot = await getDocs(collection(db, "events"));
            const staffEvents = staffEventsSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            // Combine both event sources
            setEvents([...ticketmasterEvents, ...staffEvents]);
        };

        loadEvents();
    }, [location]);

    return (
        <div className="container">
            <h2>Find Events</h2>
            <input
                type="text"
                placeholder="Enter a city"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <button onClick={() => fetchEvents(location).then(setEvents)}>Search</button>

            {events.length > 0 ? (
                events.map((event) => <EventCard key={event.id} event={event} />)
            ) : (
                <p>No events found...</p>
            )}
        </div>
    );
};

export default EventList;
