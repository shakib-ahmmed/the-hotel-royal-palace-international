import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { AuthContext } from "../context/AuthContext.jsx"; // Authentication context

function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { isAuthenticated, logout } = useContext(AuthContext); // auth state
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); 
        setIsOpen(false); 
        navigate("/login");
    };

    return (
        <nav className="bg-base-100 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">

                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2">
                    <img src="/vite.svg" alt="Logo" className="h-12 w-12" />
                    <span className="text-3xl font-bold text-primary">The Hotel Royal Palace</span>
                </Link>

                {/* Center Menu */}
                <div className="hidden justify-center md:flex space-x-8">
                    <Link to="/" className="hover:text-primary transition">Home</Link>
                    <Link to="/rooms" className="hover:text-primary transition">Rooms</Link>
                    <Link to="/admin" className="hover:text-primary transition">Admin</Link>
                </div>

                {/* Right: Login / Logout */}
                <div className="hidden md:flex items-center space-x-4">
                    {isAuthenticated ? (
                        <button onClick={handleLogout} className="btn btn-sm btn-outline">Logout</button>
                    ) : (
                        <Link to="/login" className="btn btn-sm btn-outline">Login</Link>
                    )}
                    <button onClick={toggleTheme} className="btn btn-sm btn-primary">
                        {theme === "light" ? "🌙 Dark" : "☀ Light"}
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-3xl" aria-label="Toggle menu">
                        {isOpen ? "✖" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-base-200 px-4 pt-4 pb-4 space-y-2 shadow-lg">
                    <Link to="/" className="block" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/rooms" className="block" onClick={() => setIsOpen(false)}>Rooms</Link>
                    <Link to="/admin" className="block" onClick={() => setIsOpen(false)}>Admin</Link>

                    {isAuthenticated ? (
                        <button
                            onClick={handleLogout}
                            className="btn btn-sm btn-outline w-full mt-2"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            className="btn btn-sm btn-outline w-full mt-2"
                            onClick={() => setIsOpen(false)}
                        >
                            Login
                        </Link>
                    )}

                    <button
                        onClick={() => { toggleTheme(); setIsOpen(false); }}
                        className="btn btn-sm btn-primary w-full mt-2"
                    >
                        {theme === "light" ? "🌙 Dark" : "☀ Light"}
                    </button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
