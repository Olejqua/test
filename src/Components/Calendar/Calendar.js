import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/ru';

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

class Calendar extends Component{

    render() {
        const {todos} = this.props;

        return (
            <div style={{ height: "700px" }}>
                <BigCalendar
                    toolbar
                    events={todos}
                    startAccessor={todo => new Date(todo.start)}
                    endAccessor={todo => new Date(todo.end)}
                    defaultDate={moment().toDate()}
                    showMultiDayTimes
                    views={['month', 'week']}
                    messages={{'today': "Сегодня", 'previous':'Назад', 'next':"Вперед", 'month':"месяц", 'week':"неделя"}}
                />
            </div>
        )
    }
}

export default Calendar;