import React from 'react';
import './Todo.css'
import PropTypes from 'prop-types';

import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';

function Todo(props) {

    return (
        <div className={`todo${props.completed ? ' completed' : ''}`}>
            <Checkbox checked={props.completed} onChange={() => props.onStatusChange(props.id)} />
            <span className="todo-title">{props.title}</span>
            <Button className="delete icon" icon="delete" onClick={() => props.onDelete(props.id)} />
        </div>
    );
}

Todo.propTypes = {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onStatusChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Todo;