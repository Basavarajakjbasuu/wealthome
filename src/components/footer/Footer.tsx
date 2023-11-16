
import './footer.css';

import logo from '../../assets/logo.png';
import facebook from '../../assets/facebook.svg';
import insta from '../../assets/insta.svg';
import twitter from '../../assets/twitter.svg';

import { navbarLink, supportLink } from '../../constants/constant';

import './footer.css';

const Footer = () => {
  return ( 
    <footer className="footer">

      <div className="footer-top">
        <div className="container">

          <div className="footer-brand">
            <a href="#" className='logo'>
              <img
                src={logo}
                alt="wealthome"
                width={190}
                height={28}
              />
            </a>

            <p className="body-medium footer-text">Discover your true self in a place that resonates with your soul. Don't settle; keep seeking until you find your home.</p>
          </div>

          <nav className="footer-nav" aria-labelledby='nav-label-1'>
            <p className="title-small footer-list-title" id='nav-label-1'>Quick link</p>

            <ul className="footer-list">

              {navbarLink.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <a href="#" className='body-medium footer-link'>{link.name}</a>
                </li>
              ))}

            </ul>
          </nav>

          <nav className="footer-nav" aria-labelledby='nav-label-2'>
            <p className="title-small footer-list-title" id='nav-label-1'>Support</p>

            <ul className="footer-list">

              {supportLink.map((link) => (
                <li key={link.name}>
                  <a href="#" className='body-medium footer-link'>{link.name}</a>
                </li>
              ))}

            </ul>
          </nav>
          
          <nav className="footer-nav" aria-labelledby='nav-label-2'>
            <p className="title-small footer-list-title" id='nav-label-1'>Get in touch</p>

            <ul className="footer-list">

              <li>
                <a href="#" className='body-medium footer-link'>hello@wealthome.com</a>
              </li>

              <li>
                <address className='body-medium address'>4140 Parker Rd. Allentown, New Mexico 31134</address>
              </li>

              <li>
                <ul className="social-list">

                  <li>
                    <a href="#" className='social-link'>
                      <img
                        src={facebook}
                        alt="meta"
                        width={22}
                        height={22}
                      />
                    </a>
                  </li>

                  <li>
                    <a href="#" className='social-link'>
                      <img
                        src={insta}
                        alt="insta"
                        width={22}
                        height={22}
                      />
                    </a>
                  </li>

                  <li>
                    <a href="#" className='social-link'>
                      <img
                        src={twitter}
                        alt="twitter"
                        width={22}
                        height={22}
                      />
                    </a>
                  </li>

                </ul>
              </li>

            </ul>
          </nav>
          
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">

          <p className="copyright body-medium">
            Copyright {new Date().getFullYear()} bassu 
          </p>

        </div>
      </div>

    </footer>  
  );
}
 
export default Footer;