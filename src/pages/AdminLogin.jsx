import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../component/Navbar";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://foodapp-bend.onrender.com/admin/login",
        admin
      );
      alert(res.data.message);

      // Optionally store admin ID or token
      localStorage.setItem("adminId", res.data.adminId);

      // ✅ Redirect to AddFood page (can be changed)
      navigate("/admin/add-food");
    } catch (err) {
      alert("Login failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Admin Login</h2>
        <form onSubmit={handleSubmit} className="col-md-6 offset-md-3">
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

