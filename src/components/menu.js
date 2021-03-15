import React from 'react';
import { Link } from "gatsby";
import Logo from '../images/logo.svg';

const Menu = () => (
  <div className="header">
    <div className="logo">
      <Link to='/'> <img src={Logo} alt="" /> </Link>
    </div>
    <ul className="menu">
      <li> <Link to="/">Home</Link> </li>
      <li> <Link to="/about">About</Link> </li>
      <li> <Link to="/contact">Contact</Link> </li>
    </ul>
  </div>
)

export default Menu;