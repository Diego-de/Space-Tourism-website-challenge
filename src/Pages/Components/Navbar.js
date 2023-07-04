import '../Pages.css';
import logo from '../../starter-code/assets/shared/logo.svg'
import retangle from '../../starter-code/assets/shared/Rectangle.svg'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import backgroundHome from '../../starter-code/assets/home/background-home-desktop.jpg'
import backgroundHomeTB from '../../starter-code/assets/home/background-home-tablet.jpg'
import backgroundHomeMB from '../../starter-code/assets/home/background-home-mobile.jpg'

import backgroundDest from '../../starter-code/assets/destination/background-destination-desktop.jpg'
import backgroundDestTB from '../../starter-code/assets/destination/background-destination-tablet.jpg'
import backgroundDestMB from '../../starter-code/assets/destination/background-destination-mobile.jpg'

import backgroundCrew from '../../starter-code/assets/crew/background-crew-desktop.jpg'
import backgroundCrewTB from '../../starter-code/assets/crew/background-crew-tablet.jpg'
import backgroundCrewMB from '../../starter-code/assets/crew/background-crew-mobile.jpg'

import backgroundTech from '../../starter-code/assets/technology/background-technology-desktop.jpg'
import backgroundTechTB from '../../starter-code/assets/technology/background-technology-tablet.jpg'
import backgroundTechMB from '../../starter-code/assets/technology/background-technology-mobile.jpg'

function Navbar() {


    const [isResponsive, setIsResponsive] = useState();
    const [activeLink, setActiveLink] = useState('');


    useEffect(() => {

        document.body.style.backgroundImage = localStorage.getItem('background');

        const handleResize = () => {
            if (window.innerWidth <= 768 && window.innerWidth > 375) {
                setIsResponsive(window.innerWidth <= 768);
            } else if (window.innerWidth <= 375) {
                setIsResponsive(window.innerWidth <= 375);
            }

        };

        if (window.innerWidth <= 768 && window.innerWidth > 375) {
            setIsResponsive(window.innerWidth <= 768);
            window.addEventListener('resize', handleResize);
        } else if (window.innerWidth <= 375) {
            setIsResponsive(window.innerWidth <= 375);
            window.addEventListener('resize', handleResize);
        }

        return () => {
            document.body.style.backgroundImage = '';
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const handleLinkClick = (link) => {

        setActiveLink(link);
        localStorage.removeItem('')
        let backgroundImage = '';


        if (isResponsive) {
            if (isResponsive > 375 && isResponsive <= 768) {
                if (link === '/') {
                    backgroundImage = `url(${backgroundHomeTB})`;

                } else if (link === 'destination') {
                    backgroundImage = `url(${backgroundDestTB})`;

                } else if (link === 'crew') {
                    backgroundImage = `url(${backgroundCrewTB})`;

                } else if (link === 'tech') {
                    backgroundImage = `url(${backgroundTechTB})`;

                }
            } else if (isResponsive < 375) {

                if (link === '/') {
                    backgroundImage = `url(${backgroundHomeMB})`;

                } else if (link === 'destination') {
                    backgroundImage = `url(${backgroundDestMB})`;

                } else if (link === 'crew') {
                    backgroundImage = `url(${backgroundCrewMB})`;

                } else if (link === 'tech') {
                    backgroundImage = `url(${backgroundTechMB})`;

                }
            }
        } else if (link === '/') {
            backgroundImage = `url(${backgroundHome})`;

        } else if (link === 'destination') {
            backgroundImage = `url(${backgroundDest})`;

        } else if (link === 'crew') {
            backgroundImage = `url(${backgroundCrew})`;

        } else if (link === 'tech') {
            backgroundImage = `url(${backgroundTech})`;

        }
        const bodyElement = document.querySelector('body');
        bodyElement.style.backgroundImage = backgroundImage;
        localStorage.setItem('background', backgroundImage);

    };

    return (
        <div className='navMain'>
            <div className='logo'><img src={logo} alt="Logo"></img></div>
            <div className='retangle'><img src={retangle} alt="Rectangle"></img></div>
            <div className='navchil'>
                <input type="checkbox" id="menu-toggle" />
                <label htmlFor="menu-toggle" className="menu-icon"><p>&#9776;</p></label>
                <nav>

                    <ul className='child'>
                        <label htmlFor="menu-toggle" className="close-icon"><p>&#10006;</p></label>
                        <li className={activeLink === '/' ? 'active' : ''}>

                            <Link to='/' onClick={() => handleLinkClick('/')}><span>00</span> HOME</Link>
                            {activeLink === '/' && <span className="underline"></span>}
                        </li>
                        <li className={activeLink === 'destination' ? 'active' : ''}>
                            <Link to='destination' onClick={() => handleLinkClick('destination')}><span>01</span> DESTINATION</Link>
                            {activeLink === 'destination' && <span className="underline"></span>}
                        </li>
                        <li className={activeLink === 'crew' ? 'active' : ''}>
                            <Link to='crew' onClick={() => handleLinkClick('crew')}><span>02</span> CREW</Link>
                            {activeLink === 'crew' && <span className="underline"></span>}
                        </li>
                        <li className={activeLink === 'tech' ? 'active' : ''}>
                            <Link to='tech' onClick={() => handleLinkClick('tech')}><span>03</span> TECHNOLOGY</Link>
                            {activeLink === 'tech' && <span className="underline"></span>}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;


