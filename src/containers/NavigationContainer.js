import React from 'react';
import { connect } from 'react-redux';

import Navigation from '../Components/Navigation/Navigation';

// Сопоставить состояние со свойствами (принимает состояние, возвращает объект)
function mapStateToProps(state) {
    return {
        todos: state.todos    // Св-во презентационного компонента
    }
}

const NavigationContainer = connect(mapStateToProps)(Navigation);

export default NavigationContainer;