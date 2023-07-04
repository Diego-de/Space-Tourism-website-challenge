import './Pages.css'
import { useState, useEffect } from 'react';

import crewData from '../starter-code/data.json';

import douglasImage from '../starter-code/assets/crew/image-douglas-hurley.webp';

import markImage from '../starter-code/assets/crew/image-mark-shuttleworth.webp';
import victorImage from '../starter-code/assets/crew/image-victor-glover.webp';
import anoushenImage from '../starter-code/assets/crew/image-anousheh-ansari.png';



function Crew() {


    const [activeLink, setActiveLink] = useState('');
    const [Index, setIndex] = useState(0);
    const [dados, setDados] = useState()


    useEffect(() => {
        setDados(crewData.crew);
        handleLinkClick('Douglas Hurley', 0);
    }, []);


    const handleLinkClick = (link, index) => {
        setIndex(index)
        setActiveLink(link);
    };


    const getImageSource = (imageName) => {
        switch (imageName) {
            case 'Douglas Hurley':
                return douglasImage;
            case 'Mark Shuttleworth':
                return markImage;
            case 'Victor Glover':
                return victorImage;
            case 'Anousheh Ansari':
                return anoushenImage;
            default:
                return '';
        }
    };

    return (
        <div className="crewPage">
            <div className='crewChil'>
                {dados && (
                    <div className='itens'>
                        <h3>02 MEET YOUR CREW</h3>
                        <div>
                            <h2>{dados[Index].role.toUpperCase()}</h2>
                            <h1>{dados[Index].name.toUpperCase()}</h1>
                            <p>{dados[Index].bio}</p>
                        </div>
                        <ul className='indicator'>
                            <li onClick={() => handleLinkClick('Douglas Hurley', 0)} className={activeLink === 'Douglas Hurley' ? 'active' : ''}></li>
                            <li onClick={() => handleLinkClick('Mark Shuttleworth', 1)} className={activeLink === 'Mark Shuttleworth' ? 'active' : ''}></li>
                            <li onClick={() => handleLinkClick('Victor Glover', 2)} className={activeLink === 'Victor Glover' ? 'active' : ''}></li>
                            <li onClick={() => handleLinkClick('Anousheh Ansari', 3)} className={activeLink === 'Anousheh Ansari' ? 'active' : ''}></li>
                        </ul>
                    </div>
                )}
            </div>

            <div className='crewChil2'>
                {dados && (
                    <div>
                        <img src={getImageSource(dados[Index].name)} alt={dados[Index].name}></img>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Crew;

