import { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();
const API = import.meta.env.VITE_BACKEND_URL;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Login function
  const login = async (email, password) => {
    const res = await axios.post(`${API}/api/users/login-user`, {
      email,
      password,
    });
    setUser(res.data);
    localStorage.setItem("user", JSON.stringify(res.data));
    return res.data;
  };

  // Forgot Password function
  const forgotPassword = async (email) => {
    const res = await axios.post(`${API}/api/users/forgot-password`, {
      email,
    });
    return res.data;
  };

  // ✅ Reset Password function (NEW)
  const resetPassword = async (token, newPassword, confirmNewPassword) => {
    const res = await axios.post(`${API}/api/users/reset-password/${token}`, {
      newPassword,
      confirmNewPassword,
    });
    return res.data;
  };

  return (
    <AuthContext.Provider
      value={{ user, login, forgotPassword, resetPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
