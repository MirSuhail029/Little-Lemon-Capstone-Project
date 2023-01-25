import './Footer.css'
import logo from "../Assets/Logo.png";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div id="logo">
        <img src={logo} alt="Little Lemon Logo" />
        <p>Copyright &copy; Little Lemon 2023</p>
      </div>
      <div id="doormat">
        <h5>Doormat Navigation</h5>
        <nav>
          <ul id="foot">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/">About</NavLink></li>
            <li><NavLink to="/">Menu</NavLink></li>
            <li><NavLink to="/booking">Reservation</NavLink></li>
            <li><NavLink to="/">Order Online</NavLink></li>
            <li><NavLink to="/">Login</NavLink></li>
          </ul>
        </nav>
      </div>
      <div id="contact">
        <h5>Contact</h5>
        <p>Address: Chicago</p>
        <p>Phone No: 1800-1245-1212</p>
        <p>Email: littlelemoncg@gmail.com</p>
      </div>
      <div id="social">
        <h5>Social Media Links</h5>
        <a href='https://www.facebook.com/'>Facebook</a>
        <a href='https://www.instagram.com/'>Instagram</a>
        <a href='https://twitter.com/?lang=en-in'>Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
