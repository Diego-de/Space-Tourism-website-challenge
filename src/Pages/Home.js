import './Pages.css';
import backgroundDest from '../starter-code/assets/destination/background-destination-desktop.jpg'
import { Link } from "react-router-dom";
import {useEffect } from 'react';

function Home() {

    const background = (background) =>{
        localStorage.setItem('underline', background)
    }

    return (
        <div className="home">
            <div className='homeChil'>
                <div>
                    <h3>SO, YOU WANT TO TRAVEL TO</h3>
                    <h1>SPACE</h1>
                    <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
            </div>
            <div className='homeChil2'>
                <button onClick={() => background('destination')}> <Link to='/destination'>EXPLORE</Link></button>
            </div>
        </div>
    );
}

export default Home;

