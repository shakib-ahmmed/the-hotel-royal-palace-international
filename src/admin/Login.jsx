import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
    const { login } = useContext(AuthContext); 
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/admin"; 

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const success = login(email, password); 
        if (success) {
            navigate(from, { replace: true }); 
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-20 p-6 bg-base-200 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Admin Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input input-bordered w-full"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input input-bordered w-full"
                    required
                />
                <button type="submit" className="btn btn-primary w-full">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;