// import React from 'react';
// import './Navbar.css';

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <ul className="nav-links">
//         <li><a href="#about">About Us</a></li>
//         <li><a href="#recommendations">Recommendations</a></li>
//         <li><a href="#pricing">Pricing</a></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/pricing" className="nav-link">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link to="/recomend" className="nav-link">Recommendations</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
