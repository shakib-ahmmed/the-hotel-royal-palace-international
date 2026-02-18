import { Navigate } from "react-router-dom";

// Example: simple admin auth check (replace with real auth)
const isAdminLoggedIn = () => {
    // You can replace this with a real auth check, e.g., JWT token or context
    return localStorage.getItem("adminToken") ? true : false;
};

export default function PrivateRoute({ children }) {
    if (!isAdminLoggedIn()) {
        // Redirect to login page if not admin
        return <Navigate to="/admin-login" replace />;
    }
    return children;
}
