import { Link } from 'react-router-dom';
import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import './NavBar.css';

const NavBar = () => (
  <header className="nav">
    <div className="T-link">
      <h1 className="title-h"> Bookstore CMS</h1>
      <div className="link-d">
        <Link className="link" to="/">BOOK</Link>
        <Link className="link" to="/Category">CATEGORIES</Link>
      </div>
    </div>
    <span className="userProfile-container d-flex">
      <FaUserAlt style={{
          color: '#0290ff',
          height: '15px',
          cursor: 'pointer',
          transition: 'all ease-in 300ms',
        }}
      />
    </span>
  </header>
);

export default NavBar;
