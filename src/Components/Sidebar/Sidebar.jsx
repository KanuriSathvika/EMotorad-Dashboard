import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Board.</h2>
      <ul>
        <li>Dashboard</li>
        <li>Transactions</li>
        <li>Schedules</li>
        <li>Users</li>
        <li>Settings</li>
      </ul>
      <footer>
        <p>Help</p>
        <p>Contact Us</p>
      </footer>
    </div>
  );
}

export default Sidebar;
