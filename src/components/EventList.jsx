import React, { useEffect, useState } from "react";
import { fetchEvents } from "../services/eventbriteAPI";
import EventCard from "./EventCard";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  return (
    <div>
      {events.length > 0 ? (
        events.map((event) => <EventCard key={event.id} event={event} />)
      ) : (
        <p>Loading events...</p>
      )}
    </div>
  );
};

export default EventList;
