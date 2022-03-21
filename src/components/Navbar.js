import './Navbar.css';
import logo from './logo.png';

function Navbar() {
    return (
        <div className='container'>
            <a className='Logo' href={'/'}>
                <img src={logo} alt='TELESCOPIA LOGO' />
            </a>
            <nav className='Pages'>
                <a href={'/'}>Home</a>
                <a href={'/about-us'}>About Us</a>
                <a href={'/gem-project'}>Projects</a>
                <a href={'/contact-us'}>Contact Us</a>
            </nav>
        </div>
    );
}

export default Navbar;