import React, { useState } from "react";
import { useAuth } from "../components/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      alert("Login successful!");
      navigate("/dashboard/home");
    } catch (err) {
      alert(err.response.data.message || "Login failed");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleLogin} className="loginform">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Link to="/forgot-password" className="forgot-password-link">
          Forgot Password?
        </Link>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
