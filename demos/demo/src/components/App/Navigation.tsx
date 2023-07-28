import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="main-navigation">
      <ul className="main-navigation__ul">
        <li>
          <Link to="/" className="main-navigation__link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/pagination" className="main-navigation__link">
            Pagination
          </Link>
        </li>
        <li>
          <Link to="/navigation" className="main-navigation__link">
            Navigation
          </Link>
        </li>
        <li>
          <Link to="/login" className="main-navigation__link">
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" className="main-navigation__link">
            Signup
          </Link>
        </li>
        <li>
          <Link to="/forgot-password" className="main-navigation__link">
            Forgot Password
          </Link>
        </li>
        <li>
          <Link
            to="/forgot-password/reset/1/1234567890"
            className="main-navigation__link"
          >
            Forgot Password Reset
          </Link>
        </li>
        <li>
          <Link to="/async-handler" className="main-navigation__link">
            Async Handler
          </Link>
        </li>
        <li>
          <Link to="/recursive-data-lister" className="main-navigation__link">
            Recursive Data Lister
          </Link>
        </li>
        <li>
          <Link to="/mock-data" className="main-navigation__link">
            Mock Data
          </Link>
        </li>
        <li>
          <Link to="/modal" className="main-navigation__link">
            Modal
          </Link>
        </li>
        <li>
          <Link to="/simple-form" className="main-navigation__link">
            Contact (Simple Form)
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
