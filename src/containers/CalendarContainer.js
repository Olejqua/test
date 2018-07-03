import { connect } from 'react-redux';

import Calendar from '../Components/Calendar/Calendar';

// Сопоставить состояние со свойствами (принимает состояние, возвращает объект)
function mapStateToProps(state) {
    return {
        todos: state.todos   // Св-во презентационного компонента
    }
}

const CalendarContainer = connect(mapStateToProps)(Calendar);

export default CalendarContainer;