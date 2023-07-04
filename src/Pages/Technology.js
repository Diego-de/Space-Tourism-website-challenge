import './Pages.css'

import TechData from '../starter-code/data.json';
import { useState, useEffect } from 'react';

import Launch from '../starter-code/assets/technology/image-launch-vehicle-portrait.jpg';
import LaunchTB from '../starter-code/assets/technology/image-launch-vehicle-landscape.jpg';

import spaceport from '../starter-code/assets/technology/image-spaceport-portrait.jpg';
import spaceportTB from '../starter-code/assets/technology/image-spaceport-landscape.jpg';

import capsule from '../starter-code/assets/technology/image-space-capsule-portrait.jpg';
import capsuleTB from '../starter-code/assets/technology/image-space-capsule-landscape.jpg';


function Technology() {

    const [isResponsive, setIsResponsive] = useState();


    const [activeLink, setActiveLink] = useState('');
    const [Index, setIndex] = useState(0);
    const [dados, setDados] = useState()


    useEffect(() => {
        setDados(TechData.technology);
        handleLinkClick('Launch vehicle', 0);

        const handleResize = () => {
            setIsResponsive(window.innerWidth <= 768);
          };
        
        setIsResponsive(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);


        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);


    const handleLinkClick = (link, index) => {
        setIndex(index)
        setActiveLink(link);
    };

    console.log(isResponsive)
    const getImageSource = (imageName) => {

        if (isResponsive) {
            if (imageName === 'Launch vehicle') {
                return LaunchTB;
            } else if (imageName === 'Spaceport') {
                return spaceportTB;
            } else if (imageName === 'Space capsule') {
                return capsuleTB;
            }
        } else if (imageName === 'Launch vehicle') {
            return Launch;
        } else if (imageName === 'Spaceport') {
            return spaceport;
        } else if (imageName === 'Space capsule') {
            return capsule;

        }
    };

    
    return (
        <div className="techPage">
            <div className='techChil'>
                {dados && (
                    <div className='itens'>
                        <h3>03 SPACE LAUNCH 101</h3>
                        <div className='itenChild'>
                            <div className='indicator'>
                                <li className={isResponsive ? 'responsive' : ''}>
                                    <button onClick={() => handleLinkClick('Launch vehicle', 0)} className={activeLink === 'Launch vehicle' ? 'active' : ''}>1</button>
                                </li>
                                <li className={isResponsive ? 'responsive' : ''}>
                                    <button onClick={() => handleLinkClick('Spaceport', 1)} className={activeLink === 'Spaceport' ? 'active' : ''}>2</button>
                                </li>
                                <li className={isResponsive ? 'responsive' : ''}>
                                    <button onClick={() => handleLinkClick('Space capsule', 2)} className={activeLink === 'Space capsule' ? 'active' : ''}>3</button>
                                </li>
                            </div>
                            <div className='description'>
                                <h2>THE TERMINOLOGY…</h2>
                                <h1>{dados[Index].name.toUpperCase()}</h1>
                                <p>{dados[Index].description.toUpperCase()}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className='TechChil2'>
                {dados && (
                    <div>
                        <img src={getImageSource(dados[Index].name)} alt={dados[Index].name}></img>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Technology;

