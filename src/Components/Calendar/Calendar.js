import React, {Component} from 'react';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/ru';

import todos from '../../todos';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class Calendar extends Component{


    render() {
        return (
            <div style={{ height: "700px" }}>
                <BigCalendar
                    culture='ru'
                    events={todos}
                    startAccesor='startDate'
                    endAccesor='endDate'
                    defaultDate={moment().toDate()}
                />
            </div>
        )
    }
}


    export default Calendar;