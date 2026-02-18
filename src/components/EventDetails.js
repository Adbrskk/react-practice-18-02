import React from "react";

function EventDetails({ title, date, location }) {
  return (
    <div className="eventDetails">
      <h1 className="eventTitle">{title}</h1>
      <p className="eventText">{date}</p>
      <p className="eventText">{location}</p>
    </div>
  );
}

export default EventDetails;
