import React from 'react';
import PropTypes from 'prop-types';

import Stats from '../Stats/Stats';

function Header(props) {
    return (
        <header className="App-header">
            <Stats todos={props.todos} />
            <h1 className="header-title">{props.title}</h1>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    todos: PropTypes.array.isRequired
};

export default Header;