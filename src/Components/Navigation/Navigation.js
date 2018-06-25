import React from 'react';
import {Link} from "react-router-dom";

import './Navigation.css'
import Stats from "../Stats/Stats";


function Navigation (props) {
    return (
        <div>
            <ul className="nav">
                <li className="nav-item slam-left"><Stats todos={props.todos}/></li>
                <li className="nav-item"><Link to="/" className="nav-href">Список задач</Link></li>
                <li className="nav-item"><Link to="/calendar" className="nav-href">Календарь</Link></li>
            </ul>
        </div>
    );
}

export default Navigation;