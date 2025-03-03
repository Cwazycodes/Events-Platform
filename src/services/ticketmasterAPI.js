import axios from "axios";

const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json";
const API_KEY = process.env.REACT_APP_TICKETMASTER_API_KEY; // Get API key from .env

export const fetchEvents = async (location = "New York") => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        city: location, // Search by city
        size: 20, // Number of events to return
      },
    });

    return response.data._embedded?.events || [];
  } catch (error) {
    console.error("🔥 Error fetching events:", error.response?.data || error);
    return [];
  }
};
