import { connect } from 'react-redux';

import Form from '../Components/Form/Form';
import { addTodo } from "../actions";

// Сопоставление "событий" с действиями изменяющими состояние
function mapDispatchToProps(dispatch) {
    return {
        addTodo: (title, description, importance, members, start, end) => dispatch(addTodo(title, description, importance, members, start, end))  // {Название св-в компонента в качестве значений функции
    };
}

const FormContainer = connect(null, mapDispatchToProps)(Form);

export default FormContainer;