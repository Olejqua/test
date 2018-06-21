import React, {Component, Fragment} from 'react';
import moment from "moment/moment";
import PropTypes from "prop-types";
class Todo extends Component {

    render() {
        return this.state.editing ? this.renderForm() : this.renderDisplay()
    }
}

export default Todo;