import { useNavigate } from "react-router-dom";
import useRole from "../Hooks/useRole";

const DeliveryManRoute = ({ children }) => {
  const [role, loading] = useRole();
  const navigate = useNavigate();
  if (loading) {
    return <p>loading...</p>;
  }
  if (role === "deliveryman") {
    return children;
  }
  return navigate("/deshboard");
};

export default DeliveryManRoute;
