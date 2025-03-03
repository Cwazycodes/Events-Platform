export const addToGoogleCalendar = (event) => {
  if (!event) return;

  const startDate = event.eventDate ? event.eventDate.replace(/-/g, "") : "";
  const endDate = startDate; // Assuming a single-day event

  const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    event.eventName
  )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(event.eventUrl)}`;

  window.open(gCalUrl, "_blank");
};
