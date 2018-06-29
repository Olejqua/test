import React, {Fragment} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import './Calendar.css'

import 'moment/locale/ru';

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

function Calendar (props) {
    const {todos} = props;
    console.log(props);
    return (
        <Fragment>
            <div className="calendar-title">
                <h1>Календарь</h1>
            </div>
            <div className="calendar" style={{ height: "700px" }}>
                <BigCalendar
                    toolbar
                    events={todos}
                    startAccessor={todo => new Date(todo.start)}
                    endAccessor={todo => new Date(todo.end)}
                    defaultDate={moment().toDate()}
                    showMultiDayTimes
                    views={['month', 'week']}
                    messages={{
                        'today': "Сегодня",
                        'previous': "Назад",
                        'next': "Вперед",
                        'month': "месяц",
                        'week': "неделя"
                    }}
                />
            </div>
        </Fragment>
    )
}

export default Calendar;