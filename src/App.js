import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Header from './Components/Header/Header';
import Todo from './Components/Todo/Todo';
import Form from './Components/Form/Form';

import './App.css';

import todos from './todos';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: todos
        };
    }

    changeStatus = (id) => {
        const todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });

        this.setState({ todos });
    }

    deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo => todo.id !== id);

        this.setState({ todos });
    }

    addTodo = (title, description, importance, members, startDate, endDate) => {
        const todo = {
            id: this.state.todos.length+1,
            title,
            completed: false,
            description,
            importance,
            members,
            startDate,
            endDate
        };

        this.setState(state => {
            return {
                todos: state.todos.concat(todo)
            }
        });
    }

    editTodo = (id, title, description, importance, members, startDate, endDate) => {
        let todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.title = title;
                todo.description = description;
                todo.importance = importance;
                todo.members = members;
                todo.startDate = startDate;
                todo.endDate = endDate;
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
                <Header
                    title={title}
                    todos={todos}
                />
                <section className="todo-list">
                    {todos.map(todo =>
                        <Todo
                            key={todo.id}
                            changeStatus={this.changeStatus}
                            deleteTodo={this.deleteTodo}
                            editTodo={this.editTodo}
                            {...todo}
                        />)
                    }
                </section>
                <Form addTodo={this.addTodo} />
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
    }))
};

App.defaultProps = {
    title: "Планировщик задач"
};

export default App;
