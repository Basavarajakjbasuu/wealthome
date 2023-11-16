
import './header.css';

import Logo from '../../assets/logo.png'
import { navbarLink } from '../../constants/constant';
import NavbarLink from './NavbarLink';
import { useCallback, useEffect, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';


const Header = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [activateHeader, setActivateHeader] = useState(false);

  const navbarRef = useClickOutside(() => setToggleNavbar(false));

  const handleNavbarToggle = useCallback(() => {
    setToggleNavbar((value) => !value);
  }, [])

  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setActivateHeader(true);
      } else {
        setActivateHeader(false);
      }

    }

    
    // add evenListener to activate header
    window.addEventListener('scroll', handleScroll);
  
    // cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  // Get the current URL pathname
  const currentPathname = window.location.hash;

  return (
    <header className={`header ${activateHeader && 'active'}`}>
      <div className="container">

        <a href="#" className='logo'>
          <img
            src={Logo}
            alt="wealthome"
            width={190}
            height={28}
          />
        </a>

        {/* Navbar */}
        <nav
          ref={navbarRef}
          className={`navbar ${toggleNavbar && 'active'} `}
        >

          <ul className="navbar-list">
            {navbarLink.map((link) => (
              <NavbarLink
                key={link.name}
                link={link.name}
                active={currentPathname.slice(1, 7)}
              />
            ))}
          </ul>
          
          <div className="navbar-wrapper">
            <a href="#" className='btn-link label-medium'>Login</a>
 
            <a href="#" className='btn btn-fill label-medium'>Get Started</a>

          </div>

        </nav>

        <button
          onClick={handleNavbarToggle}
          className="nav-toggle-btn icon-btn"
        >

          {toggleNavbar ? (
            <span
              ref={navbarRef}
              className="material-symbols-rounded close"
              aria-hidden="true"
            >
              close
            </span>
          ): (
            <span
              className="material-symbols-rounded open"
              aria-hidden="true"
            >
              menu
            </span>
          )}
          
          

        </button>

      </div>
    </header>
  )
}

export default Header