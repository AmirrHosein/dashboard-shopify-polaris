import { Navigate } from "react-router-dom";

export default function Root() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Navigate to="/home" />;
}
