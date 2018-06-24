import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            isModalOpen: false,
        };
    }

    toggleModal = () => {
        this.setState(state => ({isModalOpen: !state.isModalOpen}));
    };

    applyValues = () => {
        const {title, description, importance, members, start, end} = this.props;

        this.setState ({title, description, importance, members, start, end});
    }

    componentWillMount() {
        this.applyValues();
    }

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
            start,
            end,
        } = this.props;

        const {isModalOpen} = this.state;


        return (
            <Fragment>
                <div className={`todo ${completed ? 'completed' : ''}`}>
                    <Checkbox
                        checked={completed}
                        onChange={() => changeStatus(id)}
                    />
                    <span className="todo-title" onClick={this.toggleModal}>{title}</span>
                    <Button className="edit icon" icon="edit" onClick={()=> this.setState({editing:true})} />
                    <Button className="delete icon" icon="delete" onClick={() => deleteTodo(id)} />
                </div>
                {isModalOpen &&
                    <Modal onClose={this.toggleModal}>
                        <div className={`full-todo ${completed ? 'completed' : ''}`}>
                            <div className="full-todo-btn">
                                <Checkbox
                                    checked={completed}
                                    onChange={() => changeStatus(id)}
                                />
                                <Button className="edit icon" icon="edit" onClick={()=> this.setState({editing:true})} />
                                <Button className="delete icon" icon="delete" onClick={() => deleteTodo(id)} />
                            </div>

                            <div className="todo-title-full">Название задачи: {title}</div>
                            <div className="todo-description">Описание: {description}</div>
                            <div className="todo-importance">Важность: {importance}</div>
                            <div className="members">Участники: {members}</div>
                            <div className="todo-date">Начало: {moment(start).format('LLL')}</div>
                            <div className="todo-date">Окончание: {moment(end).format('LLL')}</div>
                        </div>
                    </Modal>
                }
            </Fragment>
        );
    }

    renderForm() {
        const {
            title,
            completed,
            changeStatus,
            deleteTodo,
            id,
            description,
            importance,
            members,
            start,
            end
        } = this.props;

        return (
            <Fragment>
                <div className={`todo ${completed ? 'completed' : ''}`}>
                    <Checkbox
                        checked={completed}
                        onChange={() => changeStatus(id)}
                    />
                    <span className="todo-title" onClick={this.toggleModal}>{title}</span>
                    <Button className="edit icon" icon="edit" onClick={()=> this.setState({editing:true})} />
                    <Button className="delete icon" icon="delete" onClick={() => deleteTodo(id)} />
                </div>
                <Modal>
                    <button className="modal-close-btn" onClick={this.props.onClose}>Закрыть</button>
                    <div className="todo-edit-full-form">
                        <div className="editing-string">
                        <div>Название задачи:</div>
                            <input id="title" defaultValue={title} onChange={this.handleChange}/>
                        </div>
                        <div className="editing-string">
                            <div>Описание:</div>
                            <input type="textarea" id="description" defaultValue={description} onChange={this.handleChange}/>
                        </div>
                        <div className="editing-string">
                            <div>Важность:</div>
                            <select id="importance" defaultValue={importance} onChange={this.handleChange}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                        <div className="editing-string">
                            <div>Участники:</div>
                        <input id="members" defaultValue={members} onChange={this.handleChange}/>
                        </div>
                        <div className="editing-string">
                            <div>Дата начала:</div>
                        <input type="datetime-local" id="start" defaultValue={start} onChange={this.handleChange}/>
                        </div>
                        <div className="editing-string">
                            <div>Дата Окончания:</div>
                        <input type="datetime-local" id="end" defaultValue={end} onChange={this.handleChange}/>
                        </div>
                        <Button className="save icon" icon="save" onClick={this.handleSubmit} />
                    </div>
                </Modal>
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