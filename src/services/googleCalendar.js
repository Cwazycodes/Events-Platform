export const addToGoogleCalendar = (event) => {
  const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    event.name.text
  )}&dates=${event.start.utc.replace(/-|:|\.\d+/g, "")}/${event.end.utc.replace(
    /-|:|\.\d+/g,
    ""
  )}&details=${encodeURIComponent(event.description.text)}`;
  
  window.open(gCalUrl, "_blank");
};
