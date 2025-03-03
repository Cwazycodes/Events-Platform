import React, { useEffect, useState } from "react";
import { fetchEvents } from "../services/ticketmasterAPI"; // ✅ Use Ticketmaster API
import EventCard from "./EventCard";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [location, setLocation] = useState("New York"); // Default location

  useEffect(() => {
    fetchEvents(location).then(setEvents);
  }, [location]);

  return (
    <div>
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
