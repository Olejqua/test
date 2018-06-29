// Значение сортировки
filterTodos = (event) => {
    this.setState({filter: event.target.value})
};
// Отображение по сортировке
filteredTodos = () => {
    const todos = this.props.store;
    const {filter} = this.state;
    const day = new Date();

    // Метод для сортировке на неделю
    Date.prototype.getWeek = function() {
        let oneJan = new Date(this.getFullYear(),0,1);
        let today = new Date(this.getFullYear(),this.getMonth(),this.getDate());
        let dayOfYear = ((today - oneJan + 86400000)/86400000);
        return Math.ceil(dayOfYear/7)
    };

    switch (filter) {
        case "all": {
            return todos
        }
        case "today": {
            return todos.filter((todo) => {
                const todoStartDate = new Date(todo.start);

                return todoStartDate.getDate() === day.getDate()
            })
        }
        case "tomorrow": {
            return todos.filter((todo) => {
                const todoStartDate = new Date(todo.start);

                return todoStartDate.getDate() === day.getDate()+1;
            })
        }
        case "onWeek": {
            return todos.filter((todo) => {
                const todoStartDate = new Date(todo.start);

                return todoStartDate.getWeek() === day.getWeek();
            })
        }
        case "onMonth": {
            return todos.filter((todo) => {
                const todoStartDate = new Date(todo.start);

                return todoStartDate.getMonth() === day.getMonth();
            })
        }
        default: {
            return todos
        }
    }
};

render() {
    const todos = this.store.getState();
    return (
        <Fragment>
            <div className="customSelect">Отсортировать
                <select onChange={this.filterTodos}>
                    <option value="all"> Все</option>
                    <option value="today"> Сегодня</option>
                    <option value="tomorrow"> Завтра</option>
                    <option value="onWeek"> На неделю</option>
                    <option value="onMonth"> В этом месяце</option>
                </select>
            </div>
            <section className="todo-list">
                {this.filteredTodos().map(todo =>
                    <Todo
                        key={todo.id}
                        changeStatus={this.changeStatus}
                        deleteTodo={this.deleteTodo}
                        editTodo={this.editTodo}
                        {...todo}
                    />)
                }
            </section>
        </Fragment>
    );
}
}