import React from "react";
import { addToGoogleCalendar } from "../services/googleCalendar";

const EventCard = ({ event }) => (
  <div>
    <h3>{event.name}</h3>
    {event.images && <img src={event.images[0].url} alt={event.name} width="200" />}
    <p>{event.info || "No description available."}</p>
    <p><strong>Date:</strong> {event.dates?.start?.localDate}</p>
    <p><strong>Location:</strong> {event._embedded?.venues?.[0]?.name || "N/A"}</p>
    <a href={event.url} target="_blank" rel="noopener noreferrer">More Details</a>
  </div>
);

export default EventCard;
