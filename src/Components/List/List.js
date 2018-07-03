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
                        key={todo.id}
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
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }))
};

export default List;
