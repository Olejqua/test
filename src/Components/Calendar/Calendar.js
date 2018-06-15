import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/ru';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class Calendar extends Component{
    // constructor(props) {
    //     super(props);
    //         this.state = {
    //             view: "month",
    //             // date: moment(),
    //         };
    // }

    render() {
        const {todos} = this.props;

        return (
            <div style={{ height: "700px" }}>

                    <BigCalendar
                        events={todos}
                        startAccessor={todo => new Date(todo.start)}
                        endAccessor={todo => new Date(todo.end)}
                        defaultDate={moment().toDate()}
                        showMultiDayTimes
                    />
            </div>
        )
    }
}

export default Calendar;