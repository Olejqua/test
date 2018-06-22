import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';
import FullTodo from "../FullTodo/FullTodo";
import EditingTodo from "../EditingTodo/EditingTodo";
import Modal from "../Modal/Modal";

import './Todo.css'


class Todo extends Component {
    static propTypes = {
        todo: PropTypes.object.isRequired,
    };

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
        const {title, description, importance, members, start, end} = this.props.todo;

        this.setState ({title, description, importance, members, start, end});
    }

    componentWillMount() {
        this.applyValues();
    }

    // handleSubmit = () => {
    //     const {title, description, importance, members, start, end} = this.state;
    //     const {editTodo, id} = this.props;
    //
    //     editTodo(id, title, description, importance, members, start, end);
    //
    //     this.setState({editing: false});
    // }
    //
    // handleChange = (event) => {
    //     const {id, value} = event.target;
    //
    //     this.setState({[id]: value})
    // }



    renderDisplay() {
        const {todo, todo: {id, title, completed}, changeStatus, deleteTodo} = this.props;
        const {isModalOpen} = this.state;

        return (
            <Fragment>
                <div className={`todo ${completed ? 'completed' : ''}`}>
                    <Checkbox
                        checked={completed}
                        onChange={() => changeStatus(id)}
                    />

                    <span className="todo-title"
                          onClick={this.toggleModal}>
                    {title}
                        </span>
                    <Button className="edit icon" icon="edit" onClick={()=> this.setState({editing:true})} />
                    <Button className="delete icon" icon="delete" onClick={() => deleteTodo(id)} />
                </div>
                {isModalOpen &&
                <Modal onClose={this.toggleModal}>
                    <FullTodo key={todo.id}
                              changeStatus={this.changeStatus}
                              deleteTodo={this.deleteTodo}
                              todo={todo}/>
                </Modal>}
{/*


                    <div className={`todo ${completed ? 'completed' : ''}`}>
                    <Checkbox
                        checked={completed}
                        onChange={() => changeStatus(id)}
                    />
                    
                    <span className="todo-title"
                    onClick={()=> this.setState({fullTodoOpen:!fullTodoOpen})}>
                    {title}
                        </span>
                         <Button className="edit icon" icon="edit" onClick={()=> this.setState({editing:true})} />
                         <Button className="delete icon" icon="delete" onClick={() => deleteTodo(id)} />
                     </div>
                    fullTodoOpen &&
                        <div className="full-todo">
                            <div className="todo-description">Описание: {description}</div>
                            <div className="todo-importance">Важность: {importance}</div>
                            <div className="members">Участники: {members}</div>
                            <div className="todo-date">Начало: {moment(start).format('LLL')}</div>
                            <div className="todo-date">Окончание: {moment(end).format('LLL')}</div>
                        </div>

                    */}
            </Fragment>
        );
    }

    renderForm() {
        const {todo} = this.props;

        return (
            <EditingTodo
                editTodo={this.editTodo}
                todo={todo}
            />
            // <Fragment>
            //     <div className="todo-edit-form">
            //         <input id="title" defaultValue={title} onChange={this.handleChange}/>
            //         <Button className="save icon" icon="save" onClick={this.handleSubmit} />
            //     </div>
            //     <div className="todo-edit-full-form">
            //
            //         <div>
            //             <div>Описание:</div>
            //             <input type="textarea" id="description" defaultValue={description} onChange={this.handleChange}/>
            //         </div>
            //         <div>
            //             <div>Важность:</div>
            //             <select id="importance" defaultValue={importance} onChange={this.handleChange}>
            //                 <option>1</option>
            //                 <option>2</option>
            //                 <option>3</option>
            //             </select>
            //         </div>
            //         <div>
            //             <div>Участники:</div>
            //         <input id="members" defaultValue={members} onChange={this.handleChange}/>
            //         </div>
            //         <div>
            //             <div>Дата начала:</div>
            //         <input type="datetime-local" id="start" defaultValue={start} onChange={this.handleChange}/>
            //         </div>
            //         <div>
            //             <div>Дата Окончания:</div>
            //         <input type="datetime-local" id="end" defaultValue={end} onChange={this.handleChange}/>
            //         </div>
            //     </div>
            // </Fragment>
        );
    }

    render() {
        console.log(this.state)
        return this.state.editing ? this.renderForm() : this.renderDisplay()
    }
}

export default Todo;