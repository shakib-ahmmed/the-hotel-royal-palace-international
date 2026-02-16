import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";
import Booking from "./pages/Booking";

import AdminDashboard from "./pages/admin/AdminDashboard";
import CheckIn from "./pages/admin/CheckIn";
import CheckOut from "./pages/admin/CheckOut";
import AllBookings from "./pages/admin/AllBookings";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
        <Route path="/booking/:roomId" element={<Booking />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/checkin" element={<CheckIn />} />
        <Route path="/admin/checkout" element={<CheckOut />} />
        <Route path="/admin/bookings" element={<AllBookings />} />
      </Routes>
    </>
  );
}

export default App;
