export default function EventDetails({ event }) {
  if (!event) return null;

  return (
    <div>
      <h2>{event.title}</h2>
      <p><b>Дата:</b> {event.date}</p>
      <p><b>Место:</b> {event.venue}</p>
      <p>{event.description}</p>
    </div>
  );
}
