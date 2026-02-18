export default function SeatSelector({ seats, selectedSeatIds, onToggleSeat }) {
  return (
    <div>
      <h3>Выбор мест</h3>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 8 }}>
        {seats.map((seat) => {
          const selected = selectedSeatIds.includes(seat.id);

          return (
            <button
              key={seat.id}
              type="button"
              disabled={seat.isBooked}
              onClick={() => onToggleSeat(seat.id)}
              style={{
                padding: "10px 6px",
                borderRadius: 8,
                border: "1px solid #ccc",
                cursor: seat.isBooked ? "not-allowed" : "pointer",
                opacity: seat.isBooked ? 0.5 : 1,
                background: selected ? "#d1fae5" : "white",
              }}
              title={seat.isBooked ? "Занято" : selected ? "Выбрано" : "Свободно"}
            >
              {seat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
