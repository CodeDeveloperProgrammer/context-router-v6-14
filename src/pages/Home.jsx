import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Home = () => {

const {user, setUser} = useUserContext();

const navigate = useNavigate();

const handleLoging = () =>{
  setUser({
    name: "Usuario1",
    email: "usu@ar.io",
  });
  navigate(("/dashboard"))
}

  return (
    <>
      <h1>"Home.jsx"</h1>
      <button onClick={handleLoging}>Login</button>
    </>
  );
};

export default Home;
