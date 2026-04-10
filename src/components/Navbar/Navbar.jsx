import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar glass">
      <div className="navbar-content container">
        <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span className="logo-icon">⚡</span>
          <span className="logo-text">Code<span>Flow</span></span>
        </Link>
        <div className="nav-links">
          <Link to="/" className={isActive('/')}>Problems</Link>
          <Link to="/contests" className={isActive('/contests')}>Contests</Link>
          <Link to="/discuss" className={isActive('/discuss')}>Discuss</Link>
          <Link to="/profile" className={isActive('/profile')}>Profile</Link>
        </div>
        <div className="nav-actions">
          <button className="btn-login">Login</button>
          <button className="btn-primary">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
