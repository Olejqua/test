import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import Modal from '../Modal/Modal';

import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            importance: 1,
            members: '',
            start: '',
            end: '',

            isModalOpen: false,
        };
    }

    toggleModal = () => {
        this.setState(state => ({isModalOpen: !state.isModalOpen}));
    };

    addNewTodo = event => {
        const {title, description, importance, members, start, end} = this.state;

        event.preventDefault();

        //if (title && description && importance && members && start && end) {
        if (title && start) {
            this.props.addTodo(title, description, importance, members, start, end);
            this.setState({
                title: '',
                description: '',
                importance: '',
                members: '',
                start: '',
                end: ''
            });
        } else {
            alert('Пожалуйста, заполните все поля!')
        }
    }

    updateField = (event) => {
        const {id, value} = event.target;

        this.setState({[id]: value})
    }

    render() {
        const {isModalOpen, title, description, importance, members, start, end} = this.state;

        return (

            <div className="todo-form">
                <div className="add-todo-button-title">Создать задачу</div>
                <Button
                    className="full-form-open icon"
                    icon="add_box"
                    onClick={this.toggleModal}
                />
                {isModalOpen &&
                    <Modal onClose={this.toggleModal}>
                        <form className="full-form-open-bot" onSubmit={this.addNewTodo}>
                            <div>
                                <div>Наименование задачи:</div>
                                <input
                                    id='title'
                                    value={title}
                                    placeholder="Что нужно сделать?"
                                    onChange={this.updateField}
                                />
                            </div>
                            <div>
                                <div>Описание:</div>
                                <input
                                    type="textarea"
                                    id='description'
                                    value={description}
                                    placeholder="Введите описание задачи"
                                    onChange={this.updateField}
                                />
                            </div>
                            <div>
                                <div>Важность:</div>
                                <select
                                    id='importance'

                                    value={importance}
                                    onChange={this.updateField}
                                >
                                    <option value={1}>Обычный</option>
                                    <option value={2}>Средний</option>
                                    <option value={3}>Высокий</option>
                                </select>
                            </div>
                            <div>Участники:</div>
                            <input
                                id="members"
                                value={members}
                                placeholder="Укажите участников"
                                onChange={this.updateField}
                            />
                            <div>
                                <div>Дата начала:</div>
                                <input
                                    id="start"
                                    type="datetime-local"
                                    value={start}
                                    placeholder="Дата начала"
                                    onChange={this.updateField}
                                />
                            </div>
                            <div>
                                <div>Дата Окончания:</div>
                                <input
                                    id="end"
                                    type="datetime-local"
                                    value={end}
                                    placeholder="Дата окончания"
                                    onChange={this.updateField}
                                />
                            </div>
                            <Button type="submit">Добавить</Button>
                        </form>
                    </Modal>
                }
            </div>
        );
    }
}

Form.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default Form;