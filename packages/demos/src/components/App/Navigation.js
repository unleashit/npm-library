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
        <Link to={'/navigation'} className="main-navigation__link">
          Navigation
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
      <li>
        <Link to={'/async-handler'} className="main-navigation__link">
          Async Handler
        </Link>
      </li>
      <li>
        <Link to={'/recursive-data-lister'} className="main-navigation__link">
          Recursive Data Lister
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
