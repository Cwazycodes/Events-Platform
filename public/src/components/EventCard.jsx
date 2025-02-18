import React from "react";
import { addToGoogleCalendar } from "../services/googleCalendar";

const EventCard = ({ event }) => (
  <div>
    <h3>{event.name.text}</h3>
    <p>{event.description.text}</p>
    <button onClick={() => addToGoogleCalendar(event)}>Add to Google Calendar</button>
  </div>
);

export default EventCard;
