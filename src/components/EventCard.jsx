import React, { useState } from "react";
import { db, collection, addDoc } from "../services/firebase";
import Modal from "./Modal";

const EventCard = ({ event }) => {
  const [signedUp, setSignedUp] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSignup = async (userEmail) => {
    try {
      await addDoc(collection(db, "signups"), {
        userEmail,
        eventId: event.id,
        eventName: event.name,
        eventUrl: event.url || event.eventUrl || "#",
        eventDate: event.dates?.start?.localDate || event.eventDate || "TBA",
        eventLocation:
          event._embedded?.venues?.[0]?.name || event.eventLocation || "TBA",
        eventImage:
          event.images?.[0]?.url ||
          event.eventImage ||
          "https://via.placeholder.com/300",
      });

      localStorage.setItem("userEmail", userEmail); // Save email for dashboard

      alert("✅ Successfully signed up for the event!");
      setSignedUp(true);
      setShowModal(false);
    } catch (error) {
      console.error("🔥 Signup Error:", error);
      alert("❌ Failed to sign up for event.");
    }
  };

  return (
    <div className="event-card">
      <h3>{event.name}</h3>

      <img
        src={
          event.images?.[0]?.url
            ? event.images[0].url
            : event.eventImage
            ? event.eventImage
            : "https://via.placeholder.com/300"
        }
        alt={event.name}
        loading="lazy"
      />

      <p>{event.info || "No description available."}</p>

      <p>
        <strong>Date:</strong>{" "}
        {event.dates?.start?.localDate || event.eventDate || "TBA"}
      </p>

      <p>
        <strong>Location:</strong>{" "}
        {event._embedded?.venues?.[0]?.name || event.eventLocation || "TBA"}
      </p>

      <a
        href={event.url || event.eventUrl || "#"}
        target="_blank"
        rel="noopener noreferrer"
      >
        Get Official Tickets
      </a>
      <br />

      <button onClick={() => setShowModal(true)} disabled={signedUp}>
        {signedUp ? "Signed Up ✅" : "Sign Up for Event"}
      </button>

      <Modal
        show={showModal}
        title="Sign Up for Event"
        buttonText="Sign Up"
        onSubmit={handleSignup}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default EventCard;
