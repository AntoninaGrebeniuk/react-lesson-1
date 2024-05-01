import OfficerProfile from './OfficerProfile';

export default function OfficersList({ officers }) {
  return (
    <ul>
      {officers.map(officer => (
        <li key={officer.id}>
          <OfficerProfile officer={officer} />
        </li>
      ))}
    </ul>
  );
}
