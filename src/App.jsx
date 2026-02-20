import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";
import Booking from "./pages/Booking";

import AdminDashboard from "./admin/AdminDashboard";
import CheckIn from "./admin/CheckIn";
import CheckOut from "./admin/CheckOut";
import AllBookings from "./admin/AllBooking";
import Login from "./admin/Login";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Routes>

      {/* ================= PUBLIC LAYOUT ================= */}
      <Route
        path="/*"
        element={
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/rooms/:id" element={<RoomDetails />} />
              <Route path="/booking/:roomId" element={<Booking />} />
              <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
          </>
        }
      />

      {/* ================= ADMIN ROUTES ================= */}
      <Route
        path="/admin/*"
        element={
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        }
      >
        <Route index element={<div>Welcome Admin</div>} />
        <Route path="checkin" element={<CheckIn />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="bookings" element={<AllBookings />} />
      </Route>

    </Routes>
  );
}

export default App;