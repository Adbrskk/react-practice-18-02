import EventBooking from './components/EventBooking';

const eventsData = [
  {
    id: 237632,
    date: new Date('2026-03-21'),
    events: [
      {
        id: 7843687,
        title: 'Gorvin Show',
        seats: [
          { id: 1, label: '2a', isSelected: false },
          { id: 2, label: '2b', isSelected: false },
          { id: 3, label: '2c', isSelected: true },
          { id: 4, label: '3a', isSelected: false },
          { id: 5, label: '3b', isSelected: false },
          { id: 6, label: '3c', isSelected: false },
        ],
      },
      {
        id: 7843688,
        title: 'Comedy Night',
        seats: [
          { id: 1, label: 'A1', isSelected: false },
          { id: 2, label: 'A2', isSelected: true },
          { id: 3, label: 'A3', isSelected: false },
          { id: 4, label: 'B1', isSelected: false },
          { id: 5, label: 'B2', isSelected: false },
        ],
      },
    ],
  },
  {
    id: 237633,
    date: new Date('2026-03-22'),
    events: [
      {
        id: 7843689,
        title: 'Rock Concert',
        seats: [
          { id: 1, label: '1a', isSelected: true },
          { id: 2, label: '1b', isSelected: false },
          { id: 3, label: '1c', isSelected: true },
          { id: 4, label: '2a', isSelected: false },
        ],
      },
    ],
  },
  {
    id: 237634,
    date: new Date('2026-03-23'),
    events: [
      {
        id: 7843690,
        title: 'Magic Show',
        seats: [
          { id: 1, label: 'Front 1', isSelected: false },
          { id: 2, label: 'Front 2', isSelected: false },
          { id: 3, label: 'Front 3', isSelected: true },
          { id: 4, label: 'Back 1', isSelected: false },
        ],
      },
      {
        id: 7843691,
        title: 'Jazz Evening',
        seats: [
          { id: 1, label: 'VIP 1', isSelected: true },
          { id: 2, label: 'VIP 2', isSelected: true },
          { id: 3, label: 'VIP 3', isSelected: false },
        ],
      },
    ],
  },
];

export default function App() {
  return (
    <div className="page">
      <EventBooking eventsData={eventsData} />
    </div>
  );
}