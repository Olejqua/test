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

    render() {
        return (
            <div className="App">
                <Header  title={this.props.title}
                         todos={this.state.todos}
                />
                <section className="todo-list">
                    {this.state.todos.map(todo =>
                        <Todo
                            key ={todo.id}
                            id={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                            onStatusChange={this.handleStatusChange}
                            onDelete={this.handleDelete}
                        />)
                    }
                </section>

                <Form />
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
