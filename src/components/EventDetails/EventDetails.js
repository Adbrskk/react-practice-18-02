export default function EventDetails({ title, date, location }) {
  const formattedDate = date
    ? new Date(date).toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '—';

  return (
    <div className="eventDetails">
      <h2>{title || 'Выберите мероприятие'}</h2>
      <p>
        <b>Дата:</b> {formattedDate}
      </p>
      <p>
        <b>Место:</b> {location || '—'}
      </p>
    </div>
  );
}