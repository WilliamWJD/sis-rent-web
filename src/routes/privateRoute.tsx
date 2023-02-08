import { useAuth } from "../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoute() {
    const { user } = useAuth();
    return user ? <Outlet /> : <Navigate to="/" />;
}
