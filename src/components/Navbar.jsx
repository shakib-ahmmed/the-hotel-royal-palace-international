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

    const linkStyle = "text-gray-300 hover:text-yellow-400 transition font-medium";
    const activeStyle = "text-yellow-500 font-semibold";

    return (
        <nav className="backdrop-blur-md bg-black/70 border-b border-gray-800 sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6 md:px-12">

                {/* Logo */}
                <NavLink to="/" className="flex items-center space-x-2">
                    <img src="/vite.svg" alt="Logo" className="h-10 w-10" />
                    <span className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 via-red-700 to-yellow-500">
                        The Hotel Royal Palace
                    </span>
                </NavLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex flex-1 justify-center space-x-10">
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
                <div className="hidden md:flex items-center space-x-4">
                    {isAuthenticated ? (
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 rounded-lg border border-yellow-500 bg-black/40 hover:bg-yellow-500 hover:text-black transition font-medium"
                        >
                            Logout
                        </button>
                    ) : (
                        <NavLink
                            to="/login"
                            className="px-4 py-2 rounded-lg border border-yellow-500 bg-black/40 hover:bg-yellow-500 hover:text-black transition font-medium"
                        >
                            Login
                        </NavLink>
                    )}
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-2xl text-yellow-400"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✖" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black/90 backdrop-blur-md px-6 py-4 space-y-3 border-t border-gray-700 shadow-xl rounded-b-lg">
                    <NavLink
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className="block text-gray-300 hover:text-yellow-400 transition font-medium"
                    >
                        Home
                    </NavLink>

                    {isAuthenticated && (
                        <NavLink
                            to="/admin"
                            onClick={() => setIsOpen(false)}
                            className="block text-gray-300 hover:text-yellow-400 transition font-medium"
                        >
                            Admin
                        </NavLink>
                    )}

                    {isAuthenticated ? (
                        <button
                            onClick={handleLogout}
                            className="w-full px-4 py-2 rounded-lg border border-yellow-500 bg-black/40 hover:bg-yellow-500 hover:text-black transition font-medium"
                        >
                            Logout
                        </button>
                    ) : (
                        <NavLink
                            to="/login"
                            onClick={() => setIsOpen(false)}
                            className="w-full px-4 py-2 rounded-lg border border-yellow-500 bg-black/40 hover:bg-yellow-500 hover:text-black transition font-medium"
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