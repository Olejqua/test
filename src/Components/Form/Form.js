import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullFormOpen: false,
            title: '',
            description: '',
            importance: '',
            members: '',
            startDate: '',
            endDate: '',
        };
    }

    addNewTodo = event => {
        const {title, description, importance, members, startDate, endDate} = this.state;

        event.preventDefault();

        if (title && description && importance && members && startDate && endDate) {
            this.props.addTodo(title, description, importance, members, startDate, endDate);
            this.setState({
                title: '',
                description: '',
                importance: '',
                members: '',
                startDate: '',
                endDate: ''
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
        const {fullFormOpen, title, description, importance, members, startDate, endDate} = this.state;

        return (
            <div>
                <div className="todo-form">
                    <div className="add-todo-button-title">Создать задачу</div>
                    <Button
                        className="full-form-open icon"
                        icon="add_box"
                        onClick={()=> this.setState({fullFormOpen:!fullFormOpen})}
                    />
                </div>

                {fullFormOpen &&
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
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
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
                               id="startDate"
                               type="date"
                               value={startDate}
                               placeholder="Дата начала"
                               onChange={this.updateField}
                            />
                        </div>
                        <div>
                            <div>Дата Окончания:</div>
                            <input
                               id="endDate"
                               type="date"
                               value={endDate}
                               placeholder="Дата окончания"
                               onChange={this.updateField}
                            />
                        </div>
                        <Button type="submit">Добавить</Button>
                    </form>
                }
            </div>
        );
    }
}

Form.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default Form;