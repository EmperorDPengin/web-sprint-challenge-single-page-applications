import React from "react";
import { useHistory } from 'react-router-dom';

import './Home.css'

function Home() {

    const history = useHistory();

    const routeToPizza = () => {
        history.push('/pizza');
    }

    return(
    <div className='home'>
        <div className="home-banner">
            <h1>Your Favorite Food Delivered While Coding.</h1>
            <button onClick={routeToPizza}>Pizza?</button>
        </div>
    </div>
    )
}

export default Home;