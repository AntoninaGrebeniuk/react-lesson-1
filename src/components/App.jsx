import OfficersList from './OfficersList';
import officers from '../officers.json';

export default function App() {
  return (
    <>
      <h1>Available officers</h1>
      <OfficersList officers={officers} />
    </>
  );
}
