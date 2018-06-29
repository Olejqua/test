import React from 'react';
import PropTypes from 'prop-types';

import Todo from '../Todo/Todo';

function List (props) {
    return (
        <section className="todo-list">
            {props.todos.map(todo =>
                <Todo
                    key={todo.id}
                    changeStatus={props.changeStatus}
                    deleteTodo={props.deleteTodo}
                    editTodo={props.editTodo}
                    {...todo}
                />)
            }
        </section>
    );
}

List.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }))
};

export default List;
