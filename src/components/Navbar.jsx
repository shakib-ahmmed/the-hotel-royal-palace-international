import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { isAuthenticated, logout } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        setIsOpen(false);
        navigate("/login");
    };

    const linkStyle =
        "hover:text-primary transition font-medium";

    const activeStyle =
        "text-primary font-semibold";

    return (
        <nav className="bg-base-100 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">

                {/* Logo */}
                <NavLink to="/" className="flex items-center space-x-2">
                    <img src="/vite.svg" alt="Logo" className="h-10 w-10" />
                    <span className="text-xl md:text-2xl font-bold text-primary">
                        Royal Palace
                    </span>
                </NavLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? activeStyle : linkStyle
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/rooms"
                        className={({ isActive }) =>
                            isActive ? activeStyle : linkStyle
                        }
                    >
                        Rooms
                    </NavLink>

                    {isAuthenticated && (
                        <NavLink
                            to="/admin"
                            className={({ isActive }) =>
                                isActive ? activeStyle : linkStyle
                            }
                        >
                            Admin
                        </NavLink>
                    )}
                </div>

                {/* Right Side */}
                <div className="hidden md:flex items-center space-x-3">
                    {isAuthenticated ? (
                        <button
                            onClick={handleLogout}
                            className="btn btn-sm btn-outline"
                        >
                            Logout
                        </button>
                    ) : (
                        <NavLink
                            to="/login"
                            className="btn btn-sm btn-outline"
                        >
                            Login
                        </NavLink>
                    )}

                    {/* <button
                        onClick={toggleTheme}
                        className="btn btn-sm btn-primary"
                    >
                        {theme === "light" ? "🌙" : "☀"}
                    </button> */}
                </div>

                {/* Mobile Button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✖" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-base-200 px-6 py-4 space-y-3 shadow-lg">

                    <NavLink to="/" onClick={() => setIsOpen(false)} className="block">
                        Home
                    </NavLink>

                    <NavLink to="/rooms" onClick={() => setIsOpen(false)} className="block">
                        Rooms
                    </NavLink>

                    {isAuthenticated && (
                        <NavLink
                            to="/admin"
                            onClick={() => setIsOpen(false)}
                            className="block"
                        >
                            Admin
                        </NavLink>
                    )}

                    {isAuthenticated ? (
                        <button
                            onClick={handleLogout}
                            className="btn btn-sm btn-outline w-full"
                        >
                            Logout
                        </button>
                    ) : (
                        <NavLink
                            to="/login"
                            onClick={() => setIsOpen(false)}
                            className="btn btn-sm btn-outline w-full"
                        >
                            Login
                        </NavLink>
                    )}

                    <button
                        onClick={() => {
                            toggleTheme();
                            setIsOpen(false);
                        }}
                        className="btn btn-sm btn-primary w-full"
                    >
                        {theme === "light" ? "🌙 Dark Mode" : "☀ Light Mode"}
                    </button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;