import React, { useState } from "react";
import EventDetails from "./EventDetails";
import SeatSelector from "./SeatSelector";

function EventBooking() {
  const event = {
    title: "Concert of the Year",
    date: "2023-12-01",
    location: "City Arena",
  };

  const seats = ["1A", "1B", "1C", "1D", "1E", "1F", "1G"];

  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) => {
      if (prev.includes(seat)) {
        return prev.filter((s) => s !== seat); 
      }
      return [...prev, seat]; // добавить
    });
  };

  const clearSeats = () => setSelectedSeats([]);

  return (
    <div className="card">
      <EventDetails title={event.title} date={event.date} location={event.location} />

      <SeatSelector seats={seats} selectedSeats={selectedSeats} onToggleSeat={toggleSeat} />

      <div className="actions">
        <button type="button" className="clearBtn" onClick={clearSeats}>
          Clear selection
        </button>
      </div>
    </div>
  );
}

export default EventBooking;
