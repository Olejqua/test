import axios from 'axios';

export const REQUEST_TODOS = 'REQUEST_TODOS';
export const GET_TODOS = 'GET_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const CHANGE_STATUS = 'CHANGE_STATUS';

export function getTodos() {
    return dispatch => {
        dispatch({
            type: REQUEST_TODOS
        });

        return axios.get('http://localhost:5000/api/items')
            .then(response => response.data)
            .then(todos => dispatch({
                type: GET_TODOS,
                todos
            }));
    };
}

export function addTodo(title, description, importance, members, start, end) {
    return axios.post('http://localhost:5000/api/items', { title, description, importance, members, start, end })
        .then(response => response.data)
        .then(todo => ({
            type: ADD_TODO,
            todo
        }));
}

export function deleteTodo(id) {
    return axios.delete(`http://localhost:5000/api/items/${id}`)
        .then(response => response.data)
        .then(todo => ({
            type: DELETE_TODO,
            todo
        }));
}

export function editTodo(id, title, description, importance, members, start, end) {
    return axios.put(`http://localhost:5000/api/items/${id}`, { title, description, importance, members, start, end })
        .then(response => response.data)
        .then(todo => ({
            type: EDIT_TODO,
            todo
        }));
}

export function changeStatus(id) {
    return axios.patch(`http://localhost:5000/api/items/${id}`)
        .then(response => response.data)
        .then(todo => ({
            type: CHANGE_STATUS,
            todo
        }));
}

