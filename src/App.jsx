import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Booking from "./pages/Booking"; // optional, if still needed
import Login from "./admin/Login";

import AdminDashboard from "./admin/AdminDashboard";
import CheckIn from "./admin/CheckIn";
import CheckOut from "./admin/CheckOut";
import AllBookings from "./admin/AllBooking";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Admin Routes - Private */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/checkin"
          element={
            <PrivateRoute>
              <CheckIn />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/checkout"
          element={
            <PrivateRoute>
              <CheckOut />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/bookings"
          element={
            <PrivateRoute>
              <AllBookings />
            </PrivateRoute>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;