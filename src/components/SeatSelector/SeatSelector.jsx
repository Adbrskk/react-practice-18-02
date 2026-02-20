export default function SeatSelector({ seats = [], onToggleSeat }) {
  return (
    <div className="seatsBlock">
      <h3>Места</h3>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {seats.map((seat) => (
          <button
            key={seat.id}
            type="button"
            onClick={() => onToggleSeat(seat.id)}
            style={{
              padding: '8px 12px',
              borderRadius: 8,
              border: '1px solid #ccc',
              cursor: 'pointer',
              background: seat.isSelected ? '#c7f9cc' : '#fff',
            }}
          >
            {seat.label}
          </button>
        ))}
      </div>
    </div>
  );
}