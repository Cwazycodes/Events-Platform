import React, { useState } from "react";
import EventCard from "../components/EventCard";

const Dashboard = () => {
  const [savedEvents, setSavedEvents] = useState([]);

  return (
    <div>
      <h1>Your Saved Events</h1>
      {savedEvents.length > 0 ? (
        savedEvents.map((event) => <EventCard key={event.id} event={event} />)
      ) : (
        <p>No saved events yet.</p>
      )}
    </div>
  );
};

export default Dashboard;