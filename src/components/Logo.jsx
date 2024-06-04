import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../assets/Logo.png'; // Adjust the path as needed

function Logo({ width = '100px' }) {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="Logo" style={{ width }} />
      </Link>
    </div>
  );
}

export default Logo;
