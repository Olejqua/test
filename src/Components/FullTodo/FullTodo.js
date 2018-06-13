import React, {Component} from 'react';
/*import './Todo.css'*/
import PropTypes from 'prop-types';

import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';


class FullTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let title = this.refs.title.value;

        this.props.onEdit(this.props.id, title);
        this.setState({ editing: false });
    }

    renderDisplay() {

        const {completed, onStatusChange, onDelete, title, id, description} = this.props;

        return (
            <div className={`todo${completed ? ' completed' : ''}`}>
                <Checkbox checked={completed} onChange={() => onStatusChange(id)} />
                <div>importance</div>
                <span className="todo-title">{title}</span>
                <Button className="edit icon" icon="edit" onClick={()=> this.setState({ editing:true })} />
                <Button className="delete icon" icon="delete" onClick={() => onDelete(id)} />
                <input type="textarea" ref="description" defaultValue={description} />
                <span className="todo-date">startDate</span>
                <span className="todo-date">endDate</span>

            </div>
        );
    }

    renderForm() {

        const {title} = this.props;

        return (
            <form className="todo-edit-form" onSubmit={this.handleSubmit}>
                <input type="text" ref="title" defaultValue={title} />
                <Button className="save icon" icon="save" type="submit" />
            </form>
        );
    }

    render() {
        return this.state.editing ? this.renderForm() : this.renderDisplay()
    }
}

FullTodo.propTypes = {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onStatusChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

export default FullTodo;