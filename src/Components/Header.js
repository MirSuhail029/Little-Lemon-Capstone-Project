import './Header.css'
import logo from '../Assets/Logo.png'

const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt="Little Lemon Logo" />
        </header>
     );
}
export default Header;