import React from "react";

function SeatSelector({ seats, selectedSeats, onToggleSeat }) {
  return (
    <div className="seatsBlock">
      <div className="seatsRow">
        {seats.map((seat) => {
          const isSelected = selectedSeats.includes(seat);

          return (
            <button
              key={seat}
              type="button"
              className={isSelected ? "seatBtn seatSelected" : "seatBtn"}
              onClick={() => onToggleSeat(seat)}
            >
              {seat}
            </button>
          );
        })}
      </div>

      <p className="selectedText">
        Selected Seats: {selectedSeats.length ? selectedSeats.join(", ") : "—"}
      </p>
    </div>
  );
}

export default SeatSelector;
