import React from 'react';
import PropTypes from 'prop-types';

import Todo from '../Todo/Todo';

function List (props) {
    console.log(props);
    return (
        <section className="todo-list">
            {!props.fetching && props.todos.length ?
                props.todos.map(todo =>
                    <Todo
                        key={todo._id}
                        changeStatus={props.changeStatus}
                        deleteTodo={props.deleteTodo}
                        editTodo={props.editTodo}
                        {...todo}
                    />)
                :
                <div className="loading">Загрузка...</div>
            }
        </section>
    );
}

List.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.oneOfType([
            PropTypes.string.isRequired,
            PropTypes.number.isRequired,]),
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }))
};

export default List;
