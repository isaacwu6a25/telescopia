import './Navbar.css'

function Navbar() {
    return (
        <div className='container'>
            <a className='Home' href={'/'}>TELESCOPIA</a>
            <nav className='Pages'>
                <a href={'/about-us'}>About Us</a>
                <a href={'/gem-project'}>Projects</a>
                <a href={'/contact-us'}>Contact Us</a>
            </nav>
        </div>
    );
}

export default Navbar;