import './Pages.css'
import { useState, useEffect } from 'react';
import destinationData from '../starter-code/data.json';

import moonImage from '../starter-code/assets/destination/image-moon.webp';
import marsImage from '../starter-code/assets/destination/image-mars.webp';
import europaImage from '../starter-code/assets/destination/image-europa.webp';
import titanImage from '../starter-code/assets/destination/image-titan.webp';


function Destination() {

    const [activeLink, setActiveLink] = useState('');
    const [Index, setIndex] = useState(0);
    const [dados, setDados] = useState()


    useEffect(() => {
        setDados(destinationData.destinations);
        handleLinkClick('MOON', 0);
    }, []);


    const handleLinkClick = (link, index) => {
        setIndex(index)
        setActiveLink(link);
    };


    const getImageSource = (imageName) => {
        switch (imageName) {
            case 'MOON':
                return moonImage;
            case 'MARS':
                return marsImage;
            case 'EUROPA':
                return europaImage;
            case 'TITAN':
                return titanImage;
            default:
                return '';
        }
    };

    return (
        <div className="destinatiopPage">
            <div className='destChil'>
                {dados && (
                    <div>
                        <p>01 PICK YOUR DESTINATION</p>
                        <img src={getImageSource(dados[Index].name.toUpperCase())} width={'445px'} height={'445px'} alt={dados[Index].name}></img>
                    </div>
                )}
            </div>

            <div className='destChil2'>
                <div className='nav'>
                    <ul className='navbar'>
                        <li>
                            <button onClick={() => handleLinkClick('MOON', 0)} className={activeLink === 'MOON' ? 'active' : ''}>MOON</button>
                        </li>
                        <li>
                            <button onClick={() => handleLinkClick('MARS', 1)} className={activeLink === 'MARS' ? 'active' : ''}>MARS</button>
                        </li>
                        <li>
                            <button onClick={() => handleLinkClick('EUROPA', 2)} className={activeLink === 'EUROPA' ? 'active' : ''}>EUROPA</button>
                        </li>
                        <li>
                            <button onClick={() => handleLinkClick('TITAN', 3)} className={activeLink === 'TITAN' ? 'active' : ''}>TITAN</button>
                        </li>
                    </ul>
                </div>
                {dados && (
                    <div className='itens'>
                        <div className='infoPlanet1'>
                            <h1>{dados[Index].name.toUpperCase()}</h1>
                            <p>{dados[Index].description}</p>
                        </div>
                        <div className='infoPlanet2'>
                            <div className='chil1'>
                                <p>AVG. DISTANCE</p>
                                <h1>{dados[Index].distance.toUpperCase()}</h1>
                            </div>
                            <div className='chil2'>
                                <p>EST. TRAVEL TIME</p>
                                <h1>{dados[Index].travel.toUpperCase()}</h1>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Destination;

