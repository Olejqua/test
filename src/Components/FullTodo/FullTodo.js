import React, {Component} from 'react';
import moment from "moment/moment";
import PropTypes from 'prop-types';

import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';



class FullTodo extends Component {

    static propTypes = {
        todo: PropTypes.shape({
            title: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
        }),
        changeStatus: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
    };

    applyValues = () => {
        const {title, description, importance, members, start, end} = this.props;

        this.setState ({title, description, importance, members, start, end});
    };

    componentWillMount() {
        this.applyValues();
    };

    handleSubmit = () => {
        const {title, description, importance, members, start, end} = this.state;
        const {editTodo, id} = this.props;

        editTodo(id, title, description, importance, members, start, end);

        this.setState({editing: false});
    };

    render() {

        const {
            changeStatus,
            deleteTodo,
            todo: {
                completed,
                title,
                id,
                description,
                importance,
                members,
                start,
                end
            }
        } = this.props;

        return (
            <div className="full-todo">
                <div className={`todo ${completed ? 'completed' : ''}`}>
                    <Checkbox
                        checked={completed}
                        onChange={() => changeStatus(id)}
                    />
                    <div className="todo-title">Название задачи: {title}</div>
                    <Button className="edit icon" icon="edit" onClick={()=> this.setState({editing:true})} />
                    <Button className="delete icon" icon="delete" onClick={() => deleteTodo(id)} />
                    <div className="todo-description">Описание: {description}</div>
                    <div className="todo-importance">Важность: {importance}</div>
                    <div className="members">Участники: {members}</div>
                    <div className="todo-date">Начало: {moment(start).format('LLL')}</div>
                    <div className="todo-date">Окончание: {moment(end).format('LLL')}</div>
                </div>
            </div>
        );
    }
}

export default FullTodo;