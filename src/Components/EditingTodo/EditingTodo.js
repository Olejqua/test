import React, {Component, Fragment} from 'react';
import PropTypes from "prop-types";

import Todo from "../Todo/Todo";
import Button from '../Button/Button';

class EditingTodo extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        editTodo: PropTypes.func.isRequired
    };

    handleSubmit = () => {
        const {title, description, importance, members, start, end} = this.state;
        const {editTodo, id} = this.props;

        editTodo(id, title, description, importance, members, start, end);

        this.setState({editing: false});
    }

    handleChange = (event) => {
        const {id, value} = event.target;

        this.setState({[id]: value})
    }

    render() {

        const {title, description, importance, members, start, end} = this.props;

        return (
            <Fragment>
                <div className="todo-edit-form">
                    <input id="title" defaultValue={title} onChange={this.handleChange}/>
                    <Button className="save icon" icon="save" onClick={this.handleSubmit} />
                </div>
                <div className="todo-edit-full-form">

                    <div>
                        <div>Описание:</div>
                        <input type="textarea" id="description" defaultValue={description} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <div>Важность:</div>
                        <select id="importance" defaultValue={importance} onChange={this.handleChange}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                    <div>
                        <div>Участники:</div>
                        <input id="members" defaultValue={members} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <div>Дата начала:</div>
                        <input type="datetime-local" id="start" defaultValue={start} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <div>Дата Окончания:</div>
                        <input type="datetime-local" id="end" defaultValue={end} onChange={this.handleChange}/>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default EditingTodo;