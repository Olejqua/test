import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import Modal from '../Modal/Modal';

import './Form.css';

class Form extends Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    };
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

        this.store = this.props.store;
    }

    toggleModal = () => {
        this.setState(state => ({isModalOpen: !state.isModalOpen}));
    };

    addNewTodo = event => {
        const {title} = this.state;

        const {addTodo} = this.props;
console.log(addTodo);
        event.preventDefault();

        //if (title && description && importance && members && start && end) {
        if (title) {
            addTodo(title);
            this.setState({
                title: '',
                // description: '',
                // importance: '',
                // members: '',
                // start: '',
                // end: ''
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
                    icon="add_circle_outline"
                    onClick={this.toggleModal}
                />
                {isModalOpen &&
                <Modal onClose={this.toggleModal}>
                    <form className="full-form-open-bot" onSubmit={this.addNewTodo}>
                        <div className="full-form-add-string">
                            <div>Наименование задачи:</div>
                            <input
                                id='title'
                                value={title}
                                placeholder="Что нужно сделать?"
                                onChange={this.updateField}
                            />
                        </div>
                        <div className="full-form-add-string">
                            <div>Описание:</div>
                            <textarea
                                cols="70"
                                rows="6"
                                id='description'
                                value={description}
                                placeholder="Введите описание задачи"
                                onChange={this.updateField}
                            />
                        </div>
                        <div className="full-form-add-string">
                            <div>Важность:</div>
                            <select
                                id='importance'
                                value={importance}
                                onChange={this.updateField}
                            >
                                <option value={1}>низкая</option>
                                <option value={2}>средняя</option>
                                <option value={3}>высокая</option>
                            </select>
                        </div>
                        <div className="full-form-add-string">
                            <div>Участники:</div>
                        <input
                            id="members"
                            value={members}
                            placeholder="Укажите участников"
                            onChange={this.updateField}
                        />
                        </div>
                        <div className="full-form-add-string">
                            <div>Дата начала:</div>
                            <input
                                id="start"
                                type="datetime-local"
                                value={start}
                                placeholder="Дата начала"
                                onChange={this.updateField}
                            />
                        </div>
                        <div className="full-form-add-string">
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

export default Form;