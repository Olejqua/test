import React from 'react';
import { connect } from 'react-redux';

import List from '../Components/List/List';
import { deleteTodo, editTodo, changeStatus } from "../actions";


// Сопоставить состояние со свойствами (принимает состояние, возвращает объект)
function mapStateToProps(state) {
    return {
        todos: state    // Св-во презентационного компонента
    }
}
// Сопоставление "событий" с действиями изменяющими состояние
function mapDispatchToProps(dispatch) {
    return {
        changeStatus: id => dispatch(changeStatus(id)),
        deleteTodo: id => dispatch(deleteTodo(id)),    // {Название св-в компонента в качестве значений функции
        editTodo: (id, title) => dispatch(editTodo(id, title)),
    }
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer