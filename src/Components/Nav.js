import { NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
  return (
    <nav id="navigation">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/">About</NavLink></li>
        <li><NavLink to="/">Menu</NavLink></li>
        <li><NavLink to="/booking">Reservation</NavLink></li>
        <li><NavLink to="/">Order Online</NavLink></li>
        <li><NavLink to="/">Login</NavLink></li>
      </ul>
    </nav>
  );
};

export default Nav;
