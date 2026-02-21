import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./admin/Login";

import AdminSidebar from "./admin/AdminSidebar";
import AdminDashboard from "./admin/AdminDashboard";
import CheckIn from "./admin/CheckIn";
import CheckOut from "./admin/CheckOut";
import AllBookings from "./admin/AllBooking";
import PrivateRoute from "./PrivateRoute";
import RoomDetails from "./pages/RoomDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/roomdetails/:id" element={<RoomDetails />} />

        {/* Admin Routes */}
        <Route
          path="/admin/*"
          element={
            <PrivateRoute>
              <AdminSidebar />
            </PrivateRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="checkin" element={<CheckIn />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="bookings" element={<AllBookings />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;