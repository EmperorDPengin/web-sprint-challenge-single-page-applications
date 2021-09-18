import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
    return (
        <div className="header">
            <h2>Lambda Eats</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/help">Help</Link>
            </nav>
            <hr></hr>
        </div>
    )
}

export default Header;