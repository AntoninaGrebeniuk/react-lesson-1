export default function OfficerProfile({
  officer: { name, specialization, age, status },
}) {
  return (
    <div>
      <p>Name: {name} </p>
      <p>Specialization: {specialization} </p>
      <p>Age: {age} </p>
      <p>Status: {status === 'Active' ? 'Is active' : 'Is retired'}</p>
    </div>
  );
}
