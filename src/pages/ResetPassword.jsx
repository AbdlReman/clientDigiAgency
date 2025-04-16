import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../components/context/AuthContext";

const ResetPassword = () => {
  const { token } = useParams(); // Get token from the URL
  const { resetPassword } = useAuth(); // Context API function
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const res = await resetPassword(token, newPassword, confirmNewPassword);
      alert(res.message);
    } catch (err) {
      alert(err?.response?.data?.message || err?.message || "Reset failed");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleReset} className="loginform">
        <h2>Reset Your Password</h2>
        <input
          type="password"
          placeholder="New password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm new password"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
