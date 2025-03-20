import React from "react";
import { useParams } from "react-router-dom";

const EventDetails = ({ events }) => {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);

  if (!event) return <p>Event not found.</p>;

  return (
    <div>
      <h1>{event.name}</h1>
      {event.images && (
        <img
          src={event.images[0].url}
          alt={event.name}
          width="300"
          loading="lazy"
        />
      )}
      <p>{event.info || "No description available."}</p>
      <p>
        <strong>Date:</strong> {event.dates?.start?.localDate}
      </p>
      <p>
        <strong>Time:</strong> {event.dates?.start?.localTime || "TBA"}
      </p>
      <p>
        <strong>Location:</strong> {event._embedded?.venues?.[0]?.name || "N/A"}
      </p>
      <a href={event.url} target="_blank" rel="noopener noreferrer">
        More Details
      </a>
    </div>
  );
};

export default EventDetails;
