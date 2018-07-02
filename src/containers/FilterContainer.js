import React from 'react';
import { connect } from 'react-redux';

import Filter from '../Components/Filter/Filter';
import { setFilter } from "../actions";


// Сопоставить состояние со свойствами (принимает состояние, возвращает объект)
function mapStateToProps(state) {
    return {
        activeFilter: state.filter    // Св-во презентационного компонента
    }
}
// Сопоставление "событий" с действиями изменяющими состояние
function mapDispatchToProps(dispatch) {
    return {
        onSetFilter: filter => dispatch(setFilter(filter)),    // {Название св-в компонента в качестве значений функции
    }
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer