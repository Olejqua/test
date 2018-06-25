import React from 'react';
import PropTypes from 'prop-types';

import './Header.css'

function Header(props) {
    return (
        <header className="App-header">
            <h1 className="header-title">{props.title}</h1>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;