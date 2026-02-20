import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

function AdminSidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const linkClass = ({ isActive }) =>
        isActive
            ? "bg-primary text-white px-4 py-2 rounded-lg block mb-2"
            : "hover:bg-primary hover:text-white px-4 py-2 rounded-lg block mb-2";

    return (
        <div className="flex min-h-screen">
            {/* Desktop Sidebar */}
            <aside className="hidden md:flex flex-col w-64 bg-base-200 p-4">
                <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
                <NavLink to="/admin" end className={linkClass}>
                    Dashboard
                </NavLink>
                <NavLink to="/admin/checkin" className={linkClass}>
                    Check In
                </NavLink>
                <NavLink to="/admin/checkout" className={linkClass}>
                    Check Out
                </NavLink>
                <NavLink to="/admin/bookings" className={linkClass}>
                    All Bookings
                </NavLink>
            </aside>

            {/* Mobile Sidebar Toggle */}
            <div className="md:hidden w-full">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="m-4 p-2 bg-primary text-white rounded-md"
                >
                    {isOpen ? "Close Menu ✖" : "Open Menu ☰"}
                </button>

                {isOpen && (
                    <aside className="bg-base-200 p-4 rounded-lg shadow-lg mx-4 mb-4">
                        <NavLink
                            to="/admin"
                            end
                            onClick={() => setIsOpen(false)}
                            className={linkClass}
                        >
                            Dashboard
                        </NavLink>
                        <NavLink
                            to="/admin/checkin"
                            onClick={() => setIsOpen(false)}
                            className={linkClass}
                        >
                            Check In
                        </NavLink>
                        <NavLink
                            to="/admin/checkout"
                            onClick={() => setIsOpen(false)}
                            className={linkClass}
                        >
                            Check Out
                        </NavLink>
                        <NavLink
                            to="/admin/bookings"
                            onClick={() => setIsOpen(false)}
                            className={linkClass}
                        >
                            All Bookings
                        </NavLink>
                    </aside>
                )}
            </div>

            {/* Main Content */}
            <main className="flex-1 p-6 bg-base-100">
                <Outlet />
            </main>
        </div>
    );
}

export default AdminSidebar;