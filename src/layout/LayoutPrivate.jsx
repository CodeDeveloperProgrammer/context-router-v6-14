import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
//import { useEffect } from "react";

const LayoutPrivate = () => {
  const { user, setUser } = useUserContext();

  /* const navigate = useNavigate();

  useEffect(() => {
if (!user) {
  navigate("/");
}
  }, [user]); */
/* En lugar de usar eseEffect */
  return <>{user ? <Outlet /> : <Navigate to={"/"} />}</>;
};

export default LayoutPrivate;
