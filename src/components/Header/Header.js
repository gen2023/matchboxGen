import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../services/routes';

import logo from '../../images/logo.png';
import './header.css';

function Header() {
  return (
    <>
      <Link to={routes.home}>
        <img src={logo} className="logo" alt="logo" />
      </Link>
    </>
  );
}

export default Header;
