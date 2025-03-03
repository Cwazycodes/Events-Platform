import React, { useEffect, useState } from "react";
import { db, collection, getDocs, query, where } from "../services/firebase";
import { addToGoogleCalendar } from "../services/googleCalendar";

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const email = prompt("Enter your email to view your signed-up events:");
    if (!email) return;

    setUserEmail(email);

    const fetchEvents = async () => {
      try {
        const q = query(collection(db, "signups"), where("userEmail", "==", email));
        const querySnapshot = await getDocs(q);
        const eventsList = querySnapshot.docs.map(doc => doc.data());

        setEvents(eventsList);
      } catch (error) {
        console.error("🔥 Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Your Signed-Up Events</h1>
      {events.length > 0 ? (
        events.map((event) => (
          <div key={event.eventId}>
            <h3>{event.eventName}</h3>
            <p><strong>Date:</strong> {event.eventDate}</p>
            <p><strong>Location:</strong> {event.eventLocation}</p>
            <a href={event.eventUrl} target="_blank" rel="noopener noreferrer">View Event</a>
            <br />
            <button onClick={() => addToGoogleCalendar(event)}>📅 Add to Google Calendar</button>
          </div>
        ))
      ) : (
        <p>No signed-up events yet.</p>
      )}
    </div>
  );
};

export default Dashboard;
