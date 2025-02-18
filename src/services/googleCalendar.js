export const addToGoogleCalendar = (event) => {
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${event.name.text}&dates=${event.start.utc}/${event.end.utc}`;
    window.open(gCalUrl, "_blank");
  };
  