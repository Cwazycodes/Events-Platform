import React, { useState } from "react";
import { db, collection, addDoc } from "../services/firebase";

const EventCard = ({ event }) => {
  const [signedUp, setSignedUp] = useState(false);

  const handleSignup = async () => {
    const userEmail = prompt("Enter your email to sign up:");

    if (!userEmail) return;

    try {
        await addDoc(collection(db, "signups"), {
            userEmail,
            eventId: event.id,
            eventName: event.name,
            eventUrl: event.url,
            eventDate: event.dates?.start?.localDate,
            eventLocation: event._embedded?.venues?.[0]?.name || "N/A",
            eventImage: event.images?.[0]?.url || "" // Store event image
        });

        alert("✅ Successfully signed up for the event!");
        setSignedUp(true);
    } catch (error) {
        console.error("🔥 Signup Error:", error);
        alert("❌ Failed to sign up for event.");
    }
};


  return (
    <div className="event-card">
      <h3>{event.name}</h3>
      {event.images && <img src={event.images[0].url} alt={event.name} />}
      <p>{event.info || "No description available."}</p>
      <p><strong>Date:</strong> {event.dates?.start?.localDate}</p>
      <p><strong>Location:</strong> {event._embedded?.venues?.[0]?.name || "N/A"}</p>
      <a href={event.url} target="_blank" rel="noopener noreferrer">Get Official Tickets</a>
      <br />
      <button onClick={handleSignup} disabled={signedUp}>
        {signedUp ? "Signed Up ✅" : "Sign Up for Event"}
      </button>
    </div>
);

};

export default EventCard;
