import React from 'react';
import { FileText, Users, TrendingUp } from 'lucide-react';


const Dashboard = () => {
  return (
    
    <div className="dashboard-page">
      <h1>Dashboard Overview</h1>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <FileText size={24} />
          </div>
          <div className="stat-content">
            <h3>Total Posts</h3>
            <p>25</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <Users size={24} />
          </div>
          <div className="stat-content">
            <h3>Total Views</h3>
            <p>1,234</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <TrendingUp size={24} />
          </div>
          <div className="stat-content">
            <h3>Engagement</h3>
            <p>85%</p>
          </div>
        </div>
      </div>
      <div className="recent-posts">
        <h2>Recent Posts</h2>
        <div className="posts-list">
          <div className="post-item">
            <h3>Getting Started with React</h3>
            <p>Published: March 15, 2024</p>
          </div>
          <div className="post-item">
            <h3>CSS Best Practices</h3>
            <p>Published: March 14, 2024</p>
          </div>
          <div className="post-item">
            <h3>JavaScript Tips and Tricks</h3>
            <p>Published: March 13, 2024</p>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default Dashboard;