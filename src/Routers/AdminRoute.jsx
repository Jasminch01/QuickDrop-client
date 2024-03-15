import { useNavigate } from "react-router-dom";
import useRole from "../Hooks/useRole";

const AdminRoute = ({ children }) => {
  const [role, loading] = useRole();
  const navigate = useNavigate();
  if (loading) {
    return <p>loading...</p>;
  }
  if (role === "admin") {
    return children;
  }
  return navigate("/deshboard");
};

export default AdminRoute;
