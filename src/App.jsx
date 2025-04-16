import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";

import blogData from "./data/blog.json";
import "./styles/App.css";
import Dashboard from "./pages/Dashboard";
import CreateBlog from "./pages/CreateBlog";
import GetBlogs from "./pages/GetBlogs";
import DashboardLayout from "./components/Dashborad/DashboardLayout";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/blog/:id"
            element={<BlogDetail posts={blogData.posts} />}
          />
          {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/get-blogs" element={<GetBlogs />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          {/* ✅ Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route path="home" element={<Dashboard />} />
              <Route path="create-blog" element={<CreateBlog />} />
              <Route path="get-blogs" element={<GetBlogs />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
