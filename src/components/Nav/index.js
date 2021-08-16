import React from 'react';
import Auth from '../../state/auth';
import { Link } from 'react-router-dom';

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div>
          <p className="font-medium text-black hover:text-gray-900 smooth-scroll">
            <Link to="/dashboard">Dashboard</Link>
          </p>
          <p className="text-base font-medium text-black hover:text-gray-900 smooth-scroll">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <p className="text-base font-medium text-gray-500 hover:text-gray-900 smooth-scroll">
            <Link to="/signup">Signup</Link>
          </p>
          <p className="text-base font-medium text-gray-500 hover:text-gray-900 smooth-scroll">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <Link to="/login">Login</Link>
          </p>
        </div>
      );
    }
  }

  return (
    <header className="m-4 relative rounded-lg bg-white-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <h1>
              <Link to="/">rePORTable</Link>
            </h1>
          </div>
          <nav className="hidden md:flex space-x-10 flex-direction-row">{showNavigation()}</nav>
        </div>
      </div>
    </header>
  );
}

export default Nav;
