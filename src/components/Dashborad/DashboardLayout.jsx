import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, PenSquare, FileText } from 'lucide-react';

const DashboardLayout = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Blog Dashboard</h2>
        </div>
        <nav className="sidebar-nav">
          <NavLink
            to="/dashboard/home"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            to="/dashboard/create-blog"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            <PenSquare size={20} />
            <span>Create Blog</span>
          </NavLink>
          <NavLink
            to="/dashboard/get-blogs"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            <FileText size={20} />
            <span>All Blogs</span>
          </NavLink>
        </nav>
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
