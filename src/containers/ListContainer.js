import { connect } from 'react-redux';

import List from '../Components/List/List';
import { deleteTodo, editTodo, changeStatus } from '../actions';
import { getFilteredTodos } from '../reducers';

// Сопоставить состояние со свойствами (принимает состояние, возвращает объект)
function mapStateToProps(state) {
    return {
        todos: getFilteredTodos(state),    // Св-во презентационного компонента
        fetching: state.fetching
    }
}
// Сопоставление "событий" с действиями изменяющими состояние
function mapDispatchToProps(dispatch) {
    return {
        changeStatus: id => dispatch(changeStatus(id)),
        deleteTodo: id => dispatch(deleteTodo(id)),    // {Название св-в компонента в качестве значений функции
        editTodo: (id, title, description, importance, members, start, end) => dispatch(editTodo(id, title, description, importance, members, start, end)),
    }
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer