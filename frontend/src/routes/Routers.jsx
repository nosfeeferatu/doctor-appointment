import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";

import Home from "../pages/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import MyAccount from "../Dashboard/user-account/MyAccount";
import Dashboard from "../Dashboard/doctor-account/Dashboard";
import DoctorSignup from "../pages/DoctorSignup";
import PatientSignup from "../pages/PatientSignup";
import AdminDashboard from "../Dashboard/admin-account/AdminDashboard";
import CheckoutSuccess from "../pages/CheckoutSuccess";
import Booking from "../pages/Doctors/Booking";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/register/doctor" element={<DoctorSignup />} />
      <Route path="/register/patient" element={<PatientSignup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/checkout-success" element={<CheckoutSuccess />} />
      <Route path="/doctors/:id/booking" element={<Booking />} />
      <Route
        path="/users/profile/me"
        element={
          <ProtectedRoutes allowedRoles={["patient"]}>
            <MyAccount />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/doctors/profile/me"
        element={
          <ProtectedRoutes allowedRoles={["doctor"]}>
            <Dashboard />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoutes allowedRoles={["admin"]}>
            <AdminDashboard />
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
};

export default Routers;
