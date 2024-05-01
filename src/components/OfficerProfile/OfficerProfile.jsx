import clsx from 'clsx';
import css from './OfficerProfile.module.css';

export default function OfficerProfile({
  officer: { name, specialization, age, status },
}) {
  return (
    <div
      className={clsx(
        css.container,
        status === 'Active' ? css.active : css.retired
      )}
    >
      <p>Name: {name} </p>
      <p>Specialization: {specialization} </p>
      <p>Age: {age} </p>
      <p className={css.text}>
        <b>Status:</b> {status === 'Active' ? 'Is active' : 'Is retired'}
      </p>
    </div>
  );
}
