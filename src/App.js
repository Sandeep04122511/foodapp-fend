import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar"; // Ensure the correct path to Navbar
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ContactUs from "./pages/ContactUs";
import AdminLogin from "./pages/AdminLogin";
import FoodDashboard from "./component/FoodDashboard";
import AddFood from "./component/AddFood";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar is included in all pages */}
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contactus" element={<ContactUs />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/dashboard" element={<FoodDashboard />} />
        <Route path="/add-food" element={<AddFood />} />
      </Routes>
    </Router>
  );
};

export default App;
