import React, { useState } from "react";
import { useAuth } from "../components/context/AuthContext";

const ForgotPassword = () => {
  const { forgotPassword } = useAuth();
  const [email, setEmail] = useState("");

  const handleForgot = async (e) => {
    e.preventDefault();
    try {
      const res = await forgotPassword(email);
      alert(res.message);
    } catch (err) {
      alert(err.response.data.message || "Error sending reset link");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleForgot} className="loginform">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
