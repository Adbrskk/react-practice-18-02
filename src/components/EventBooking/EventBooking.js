import { useMemo, useState } from 'react';
import EventDetails from './EventDetails';
import SeatSelector from './SeatSelector';

function formatDateKey(d) {
  const dt = new Date(d);
  const y = dt.getFullYear();
  const m = String(dt.getMonth() + 1).padStart(2, '0');
  const day = String(dt.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export default function EventBooking({ eventsData = [] }) {
  const availableDates = useMemo(() => {
    return eventsData.map((d) => ({
      id: d.id,
      date: d.date,
      key: formatDateKey(d.date),
      label: new Date(d.date).toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      events: d.events || [],
    }));
  }, [eventsData]);

  const [selectedDateKey, setSelectedDateKey] = useState(availableDates[0]?.key || '');
  const selectedDay = availableDates.find((d) => d.key === selectedDateKey);
  const dayEvents = selectedDay?.events || [];

  const [selectedEventId, setSelectedEventId] = useState(dayEvents[0]?.id ?? null);

  function handleDateChange(nextKey) {
    setSelectedDateKey(nextKey);
    const nextDay = availableDates.find((d) => d.key === nextKey);
    const firstEventId = nextDay?.events?.[0]?.id ?? null;
    setSelectedEventId(firstEventId);
  }

  const selectedEvent = dayEvents.find((e) => e.id === selectedEventId);

  // ВАЖНО: состояние мест — только здесь
  const [seatsByEvent, setSeatsByEvent] = useState(() => {
    const map = new Map();
    for (const day of eventsData) {
      for (const ev of day.events || []) {
        map.set(ev.id, (ev.seats || []).map((s) => ({ ...s })));
      }
    }
    return map;
  });

  const seats = selectedEvent ? seatsByEvent.get(selectedEvent.id) || [] : [];

  function handleToggleSeat(seatId) {
    if (!selectedEvent) return;

    setSeatsByEvent((prev) => {
      const next = new Map(prev);
      const current = next.get(selectedEvent.id) || [];
      next.set(
        selectedEvent.id,
        current.map((s) => (s.id === seatId ? { ...s, isSelected: !s.isSelected } : s))
      );
      return next;
    });
  }

  return (
    <div className="card">
      <h1>Бронирование</h1>

      <div style={{ marginBottom: 12 }}>
        <label>
          <b>Дата: </b>
          <select value={selectedDateKey} onChange={(e) => handleDateChange(e.target.value)}>
            {availableDates.map((d) => (
              <option key={d.key} value={d.key}>
                {d.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div style={{ marginBottom: 12 }}>
        <label>
          <b>Мероприятие: </b>
          <select
            value={selectedEventId ?? ''}
            onChange={(e) => setSelectedEventId(Number(e.target.value))}
            disabled={!dayEvents.length}
          >
            {dayEvents.map((ev) => (
              <option key={ev.id} value={ev.id}>
                {ev.title}
              </option>
            ))}
          </select>
        </label>
      </div>

      <EventDetails
        title={selectedEvent?.title}
        date={selectedDay?.date}
        location={selectedEvent?.location || '—'}
      />

      <SeatSelector seats={seats} onToggleSeat={handleToggleSeat} />

      <div style={{ marginTop: 12 }}>
        <b>Выбрано мест:</b> {seats.filter((s) => s.isSelected).map((s) => s.label).join(', ') || '—'}
      </div>
    </div>
  );
}