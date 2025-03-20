import React, { useEffect, useState } from "react";
import { db, collection, getDocs, query, where } from "../services/firebase";
import { addToGoogleCalendar } from "../services/googleCalendar";

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const getEmailAndFetchEvents = async () => {
      const email = localStorage.getItem("userEmail");
      if (!email) {
        alert("Please sign up for an event first!");
        return;
      }
      setUserEmail(email);

      try {
        const q = query(
          collection(db, "signups"),
          where("userEmail", "==", email)
        );
        const querySnapshot = await getDocs(q);
        const eventsList = querySnapshot.docs.map((doc) => doc.data());

        setEvents(eventsList);
      } catch (error) {
        console.error("🔥 Error fetching events:", error);
      }
    };

    getEmailAndFetchEvents();
  }, []);

  return (
    <div className="dashboard">
      <h1>Your Signed-Up Events</h1>
      {events.length > 0 ? (
        events.map((event) => (
          <div className="event-card" key={event.eventId}>
            <h3>{event.eventName}</h3>
            {event.eventImage && (
              <img
                src={event.eventImage}
                alt={event.eventName}
                loading="lazy"
              />
            )}
            <p>
              <strong>Date:</strong> {event.eventDate}
            </p>
            <p>
              <strong>Location:</strong> {event.eventLocation}
            </p>
            <a href={event.eventUrl} target="_blank" rel="noopener noreferrer">
              View Event
            </a>
            <br />
            <button onClick={() => addToGoogleCalendar(event)}>
              📅 Add to Google Calendar
            </button>
          </div>
        ))
      ) : (
        <p>No signed-up events yet.</p>
      )}
    </div>
  );
};

export default Dashboard;
