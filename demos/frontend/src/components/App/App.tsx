import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AsyncHandler from '../asyncHandler';
import ForgotPassword from '../forgotPassword';
// import ForgotPasswordReset from '../forgotPasswordReset';
import Home from '../Home/Home';
import Login from '../login';
import ModalDemo from '../modal';
import NavigationDemo from '../navigation';
import Pagination from '../pagination';
import RecursiveDataLister from '../recursiveDataLister';
import Signup from '../signup';
import ContactDemo from '../quickForm';
import Navigation from './Navigation';
import ErrorBoundary from './errorBoundary';
import './App.scss';

function App() {
  return (
    <React.StrictMode>
      <ErrorBoundary>
        <Router>
          <div className="app-container">
            <Navigation />
            <div className="component-container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pagination" element={<Pagination />} />
                <Route path="/navigation" element={<NavigationDemo />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                {/* <Route */}
                {/*  path="/forgot-password/reset/:userid/:token" */}
                {/*  element={<ForgotPasswordReset />} */}
                {/* /> */}
                <Route path="/async-handler" element={<AsyncHandler />} />
                <Route
                  path="/recursive-data-lister"
                  element={<RecursiveDataLister />}
                />
                <Route path="/modal" element={<ModalDemo />} />
                <Route path="/quick-form" element={<ContactDemo />} />
              </Routes>
            </div>
          </div>
        </Router>
      </ErrorBoundary>
    </React.StrictMode>
  );
}

export default App;
