import moment from 'moment';

const todos = [
    {
        id: 1,
        title: 'Задача 1',
        completed: true,
        description: 'Выучить JS',
        start: moment(),
        end: moment()+1,
        importance: '3',
        members: ['Олег']
    },
    {
        id: 2,
        title: 'Задача 2',
        completed: false,
        description: 'Выучить React',
        start: moment(),
        end: moment(),
        importance: '3',
        members: ['Олег']
    },
    {
        id: 3,
        title: 'Задача 3',
        completed: false,
        description: 'Выучить Redux',
        start: moment(),
        end: moment(),
        importance: '3',
        members: ['Олег']
    },
];

export default todos;