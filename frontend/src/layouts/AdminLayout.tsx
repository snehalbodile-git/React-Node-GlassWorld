import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={`wrapper sidebar-mini layout-fixed ${
        collapsed ? "sidebar-collapse" : ""
      }`}
    >
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              role="button"
              onClick={(e) => {
                e.preventDefault();
                toggleSidebar();
              }}
            >
              <i className="fas fa-bars"></i>
            </a>
          </li>
        </ul>
      </nav>

      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="#" className="brand-link">
          <span className="brand-text font-weight-light">
            Admin Panel
          </span>
        </a>

        <div className="sidebar">
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-link " + (isActive ? "active" : "")
                  }
                >
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>Dashboard</p>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/users"
                  className={({ isActive }) =>
                    "nav-link " + (isActive ? "active" : "")
                  }
                >
                  <i className="nav-icon fas fa-users"></i>
                  <p>Users</p>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      <div className="content-wrapper p-3">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;