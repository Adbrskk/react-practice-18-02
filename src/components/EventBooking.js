import { useMemo, useState } from "react";
import EventDetails from "./EventDetails";
import SeatSelector from "./SeatSelector";

export default function EventBooking() {
  const event = {
    title: "Бронирование билетов",
    date: "2026-03-05 19:00",
    venue: "City Hall",
    description: "Выберите места и подтвердите бронь.",
    pricePerSeat: 25,
  };

  const [seats, setSeats] = useState(() =>
    Array.from({ length: 24 }, (_, i) => {
      const n = i + 1;
      return {
        id: `S${n}`,
        label: `S${n}`,
        isBooked: [3, 7, 12].includes(n), // пример занятых
      };
    })
  );

  const [selectedSeatIds, setSelectedSeatIds] = useState([]);
  const [status, setStatus] = useState("");

  const selectedSeats = useMemo(
    () => seats.filter((s) => selectedSeatIds.includes(s.id)),
    [seats, selectedSeatIds]
  );

  const total = selectedSeats.length * event.pricePerSeat;

  function onToggleSeat(seatId) {
    setStatus("");
    setSelectedSeatIds((prev) =>
      prev.includes(seatId) ? prev.filter((id) => id !== seatId) : [...prev, seatId]
    );
  }

  function onConfirm() {
    if (selectedSeatIds.length === 0) {
      setStatus("Выберите хотя бы одно место.");
      return;
    }

    setSeats((prev) =>
      prev.map((seat) =>
        selectedSeatIds.includes(seat.id) ? { ...seat, isBooked: true } : seat
      )
    );

    setSelectedSeatIds([]);
    setStatus("Бронь подтверждена ✅");
  }

  return (
    <div style={{ maxWidth: 800, margin: "40px auto", padding: 16 }}>
      <EventDetails event={event} />

      <hr style={{ margin: "20px 0" }} />

      <SeatSelector
        seats={seats}
        selectedSeatIds={selectedSeatIds}
        onToggleSeat={onToggleSeat}
      />

      <hr style={{ margin: "20px 0" }} />

      <div>
        <h3>Итого</h3>
        <p>
          Выбрано мест: <b>{selectedSeats.length}</b>
        </p>
        <p>
          Сумма: <b>{total}€</b>
        </p>

        <button
          type="button"
          onClick={onConfirm}
          style={{
            padding: "10px 14px",
            borderRadius: 10,
            border: "1px solid #111",
            background: "white",
            cursor: "pointer",
          }}
        >
          Подтвердить бронь
        </button>

        {status && <p style={{ marginTop: 12 }}>{status}</p>}
      </div>
    </div>
  );
}
