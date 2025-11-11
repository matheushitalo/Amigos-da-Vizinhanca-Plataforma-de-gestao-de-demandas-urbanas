import { Navigate } from "react-router-dom";
import { isAuth } from "../services/authMock";

export default function ProtectedRoute({ children }) {
  return isAuth() ? children : <Navigate to="/" replace />;
}
