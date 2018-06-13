import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';

import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            fullTodoOpen: false
        };
    }

    applyValues = () => {
        const {title, description, importance, members, startDate, endDate} = this.props;

        this.setState ({title, description, importance, members, startDate, endDate});
    }

    componentWillMount() {
        this.applyValues();
    }

    handleSubmit = () => {
        const {title, description, importance, members, startDate, endDate} = this.state;
        const {editTodo, id} = this.props;

        editTodo(id, title, description, importance, members, startDate, endDate);

        this.setState({editing: false});
    }

    handleChange = (event) => {
        const {id, value} = event.target;

        this.setState({[id]: value})
    }

    renderDisplay() {
        const {
            completed,
            changeStatus,
            deleteTodo,
            title,
            id,
            description,
            importance,
            members,
            startDate,
            endDate,
        } = this.props;

        const {fullTodoOpen} = this.state;


        return (
            <Fragment>
                <div className={`todo ${completed ? 'completed' : ''}`}>
                    <Checkbox
                        checked={completed}
                        onChange={() => changeStatus(id)}
                    />
                    <span className="todo-title" onClick={()=> this.setState({fullTodoOpen:!fullTodoOpen})}>{title}</span>
                    <Button className="edit icon" icon="edit" onClick={()=> this.setState({editing:true})} />
                    <Button className="delete icon" icon="delete" onClick={() => deleteTodo(id)} />
                </div>
                {
                    fullTodoOpen &&
                    <div className="full-todo">
                        <div className="todo-description">Описание: {description}</div>
                        <div className="todo-importance">Важность: {importance}</div>
                        <div className="members">Участники: {members}</div>
                        <div className="todo-date">Начало: {startDate}</div>
                        <div className="todo-date">Окончание: {endDate}</div>
                    </div>
                }
            </Fragment>
        );
    }

    renderForm() {
        const {title, description, importance, members, startDate, endDate} = this.props;

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
                    <input type="date" id="startDate" defaultValue={startDate} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <div>Дата Окончания:</div>
                    <input type="date" id="endDate" defaultValue={endDate} onChange={this.handleChange}/>
                    </div>
                </div>
            </Fragment>
        );
    }

    render() {
        return this.state.editing ? this.renderForm() : this.renderDisplay()
    }
}

Todo.propTypes = {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    changeStatus: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired
};

export default Todo;