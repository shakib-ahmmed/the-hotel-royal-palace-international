import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
    const { isAuthenticated, logout } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        setIsOpen(false);
        navigate("/login");
    };

    const linkStyle = "hover:text-indigo-400 transition font-medium";
    const activeStyle = "text-indigo-500 font-semibold";

    return (
        <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-md sticky top-0 z-50">
            <div className="max-w-6x1 lg:ml-20 lg:mr-20 mx-auto flex justify-between items-center h-14 px-4 md:px-6">

                {/* Logo */}
                <NavLink to="/" className="flex items-center space-x-2">
                    <img src="/vite.svg" alt="Logo" className="h-10 w-10" />
                    <span className="text-lg md:text-xl font-bold text-white">
                        The Hotel Royal Palace
                    </span>
                </NavLink>

                {/* Desktop Menu - Centered */}
                <div className="hidden md:flex space-x-10 justify-center flex-1">
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? activeStyle : linkStyle)}
                    >
                        Home
                    </NavLink>

                    {isAuthenticated && (
                        <NavLink
                            to="/admin"
                            className={({ isActive }) => (isActive ? activeStyle : linkStyle)}
                        >
                            Admin
                        </NavLink>
                    )}
                </div>

                {/* Desktop Right Buttons */}
                <div className="hidden md:flex items-center space-x-3">
                    {isAuthenticated ? (
                        <button
                            onClick={handleLogout}
                            className="px-3 py-1 rounded-lg border border-indigo-500 hover:bg-indigo-500 hover:text-white transition"
                        >
                            Logout
                        </button>
                    ) : (
                        <NavLink
                            to="/login"
                            className="px-3 py-1 rounded-lg border border-indigo-500 hover:bg-indigo-500 hover:text-white transition"
                        >
                            Login
                        </NavLink>
                    )}
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-2xl text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✖" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-900 px-4 py-3 space-y-3 shadow-lg">
                    <NavLink
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className="block text-white hover:text-indigo-400 transition"
                    >
                        Home
                    </NavLink>

                    {isAuthenticated && (
                        <NavLink
                            to="/admin"
                            onClick={() => setIsOpen(false)}
                            className="block text-white hover:text-indigo-400 transition"
                        >
                            Admin
                        </NavLink>
                    )}

                    {isAuthenticated ? (
                        <button
                            onClick={handleLogout}
                            className="w-full px-3 py-2 rounded-lg border border-indigo-500 hover:bg-indigo-500 hover:text-white transition"
                        >
                            Logout
                        </button>
                    ) : (
                        <NavLink
                            to="/login"
                            onClick={() => setIsOpen(false)}
                            className="w-full px-3 py-2 rounded-lg border border-indigo-500 hover:bg-indigo-500 hover:text-white transition"
                        >
                            Login
                        </NavLink>
                    )}
                </div>
            )}
        </nav>
    );
}

export default Navbar;