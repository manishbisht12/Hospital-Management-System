import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Context } from "../main";
import { useNavigate, Link, Navigate } from "react-router-dom";

export default function Register() {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    nic: "", dob: "", gender: "", password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/user/patient/register",
        form,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" }
        }
      );

      toast.success(res.data.message);
      setIsAuthenticated(true);
      navigate("/");
      setForm({
        firstName: "", lastName: "", email: "", phone: "",
        nic: "", dob: "", gender: "", password: ""
      });
    } catch (err) {
      const msg = err?.response?.data?.message || err.message || "Registration failed.";
      toast.error(msg);
      console.error("Registration error:", err);
    }
  };

  if (isAuthenticated) return <Navigate to="/" />;

  return (
    <div className="register-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleRegistration}>
        <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" required />
        <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" required />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        <input name="phone" type="text" value={form.phone} onChange={handleChange} placeholder="Phone" />
        <input name="nic" type="text" value={form.nic} onChange={handleChange} placeholder="NIC" />
        <input name="dob" type="date" value={form.dob} onChange={handleChange} placeholder="DOB" />
        <select name="gender" value={form.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option><option value="Female">Female</option>
        </select>
        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <p>Already registered? <Link to="/signin">Login Now</Link></p>
    </div>
  );
}
