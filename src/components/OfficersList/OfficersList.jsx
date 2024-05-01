import OfficerProfile from '../OfficerProfile/OfficerProfile';
import css from './OfficersList.module.css';

export default function OfficersList({ officers }) {
  return (
    <ul className={css.list}>
      {officers.map(officer => (
        <li className={css.item} key={officer.id}>
          <OfficerProfile officer={officer} />
        </li>
      ))}
    </ul>
  );
}
