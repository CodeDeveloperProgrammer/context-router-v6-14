import { useUserContext } from "../context/UserContext";

const Dashboard = () => {
  const { user } = useUserContext();

  return (
    <>
      <h1>Dashboard.jsx</h1>
      <h2>Bienvenido: {user.name}</h2>
    </>
  );
};

export default Dashboard;
