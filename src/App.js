import React, {Component} from 'react';
import './App.css';

import PropTypes from 'prop-types';
import todos from './todos';
import Header from './Components/Header/Header';
import Todo from './Components/Todo/Todo';
import Form from './Components/Form/Form';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: todos
        };
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleEdit = this.handleEdit.bind(this);

        this.counter = localStorage.getItem("counter") || 0;
    }

    handleStatusChange(id) {
        let todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({ todos });
    }

    handleDelete(id) {
        let todos = this.state.todos.filter(todo => todo.id !== id);

        this.setState({ todos });
    }

    handleAdd(title) {
        let todo = {
            id: this.state.todos.length+1,
            title,
            completed: false
        };

        this.setState(state => {
            return {
                todos: state.todos.concat(todo)
            }
        });
    }

    handleEdit(id, title) {
        let todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.title = title;
            }
            return todo;
        });
        this.setState({ todos });
    }

    render() {

        const {title} = this.props;
        const {todos} = this.state;

        return (
            <div className="App">
                <Header  title={title}
                         todos={todos}
                />
                <section className="todo-list">
                    {todos.map(todo =>
                        <Todo
                            key ={todo.id}
                            id={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                            onStatusChange={this.handleStatusChange}
                            onDelete={this.handleDelete}
                            onEdit={this.handleEdit}
                        />)
                    }
                </section>

                <Form onAdd={this.handleAdd} />
            </div>
        );
    }
}

App.propTypes = {
    title: PropTypes.string,
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })).isRequired
};

App.defaultProps = {
    title: "Планировщик задач"
};

export default App;
