import React from 'react';
import {Link} from "react-router-dom";

import './Navigation.css'

function Navigation () {
    return (
        <div>
            <ul className="nav">
                <li className="nav-item"><Link to="/" className="nav-href">Список задач</Link></li>
                <li className="nav-item"><Link to="/calendar" className="nav-href">Календарь</Link></li>
            </ul>
        </div>
    );
}

export default Navigation;