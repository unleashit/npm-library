import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="main-navigation">
    <ul className="main-navigation__ul">
      <li>
        <Link to={'/'} className="main-navigation__link">
          Home
        </Link>
      </li>
      <li>
        <Link to={'/pagination'} className="main-navigation__link">
          Pagination
        </Link>
      </li>
      <li>
        <Link to={'/login'} className="main-navigation__link">
          Login
        </Link>
      </li>
      <li>
        <Link to={'/signup'} className="main-navigation__link">
          Signup
        </Link>
      </li>
      <li>
        <Link to={'/forgot-password'} className="main-navigation__link">
          Forgot Password
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
