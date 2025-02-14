import axios from "axios";

const API_KEY = process.env.REACT_APP_EVENTBRITE_API_KEY;
const BASE_URL = "https://www.eventbriteapi.com/v3/events/search/?location.address=yourcity";

export const fetchEvents = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    return response.data.events;
  } catch (error) {
    console.error("Error fetching events", error);
    return [];
  }
};
