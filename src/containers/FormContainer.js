import React from 'react';
import { connect } from 'react-redux';

import Form from '../Components/Form/Form';
import { addTodo } from "../actions";

// Сопоставление "событий" с действиями изменяющими состояние
function mapDispatchToProps(dispatch) {
    return {
        addTodo: title => dispatch(addTodo(title))  // {Название св-в компонента в качестве значений функции
    };
}

const FormContainer = connect(null, mapDispatchToProps)(Form);

export default FormContainer;