import {GET_TODOS, ADD_TODO, DELETE_TODO, EDIT_TODO, CHANGE_STATUS} from '../actions';

function todoReducer(state = {}, action) {
    switch (action.type) {
        case CHANGE_STATUS:
            if (state._id !== action.todo._id) {
                return state;
            }

            return action.todo;

        case EDIT_TODO:
            if (state._id !== action.todo._id) {
                return state;
            }

            return action.todo;

        default:
            return state;
    }
}

export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_TODOS:
            return action.todos;

        case ADD_TODO:
            return [...state, action.todo];

        case DELETE_TODO:
            const index = state.findIndex(todo => todo.id === action.id);

            return [
                ...state.slice(0, index),
                ...state.slice(index + 1),
            ];

        case EDIT_TODO:
            return state.map(todo => todoReducer(todo, action));

        case CHANGE_STATUS:
            return state.map(todo => todoReducer(todo, action));

        default:
            return state;
    }
}

Date.prototype.getWeek = function() {
    let oneJan = new Date(this.getFullYear(),0,1);
    let today = new Date(this.getFullYear(),this.getMonth(),this.getDate());
    let dayOfYear = ((today - oneJan + 86400000)/86400000);
    return Math.ceil(dayOfYear/7)
};

const day = new Date();

export function getFilteredTodos (state, filter) {
    switch (filter) {
        case "ALL": {
            return state
        }
        case "today": {
            return state.filter((todo) => {
                const todoStartDate = new Date(todo.start);

                return todoStartDate.getDate() === day.getDate()
            })
        }
        case "tomorrow": {
            return state.filter((todo) => {
                const todoStartDate = new Date(todo.start);

                return todoStartDate.getDate() === day.getDate()+1;
            })
        }
        case "onWeek": {
            return state.filter((todo) => {
                const todoStartDate = new Date(todo.start);

                return todoStartDate.getWeek() === day.getWeek();
            })
        }
        case "onMonth": {
            return state.filter((todo) => {
                const todoStartDate = new Date(todo.start);

                return todoStartDate.getMonth() === day.getMonth();
            })
        }
        default: {
            return state
        }
    }
};