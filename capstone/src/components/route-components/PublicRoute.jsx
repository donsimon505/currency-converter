import { Navigate } from "react-router-dom";
import useAuthStore from "../../stores/useAuthStore";

function PublicRoute({ children }) {
  const { currentUser } = useAuthStore();

  if (currentUser) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default PublicRoute;
