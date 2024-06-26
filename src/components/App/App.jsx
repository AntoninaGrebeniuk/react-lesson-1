import OfficersList from '../OfficersList/OfficersList';
import officers from '../../officers.json';
import css from './App.module.css';

export default function App() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Available officers</h1>
      <OfficersList officers={officers} />
    </div>
  );
}
