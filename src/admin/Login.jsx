import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import { AuthContext } from "../context/AuthContext.jsx"; 
function Login() {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        
        if (email === "admin@example.com" && password === "password") {
            login();          
            setError("");
            navigate("/admin"); 
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center bg-base-200">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center text-primary">
                        Admin Login
                    </h2>

                    {error && (
                        <div className="mb-4 text-red-600 font-semibold text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-1 font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block mb-1 font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary-focus transition"
                        >
                            Login
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-500 mt-4">
                        Forgot your password?{" "}
                        <a href="#" className="text-primary underline">
                            Reset it
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Login;
