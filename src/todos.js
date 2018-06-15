import moment from 'moment';

const todos = [
    {
        id: 1,
        title: 'Задача 1',
        completed: true,
        description: 'Выучить JS',
        start: moment(),
        end: moment(),
        importance: '3',
        members: ['Олег']
    },
    {
        id: 2,
        title: 'Задача 2',
        completed: false,
        description: 'Выучить React',
        start: '2018-28-05',
        end: '2018-08-06',
        importance: '3',
        members: ['Олег']
    },
    {
        id: 3,
        title: 'Задача 3',
        completed: false,
        description: 'Выучить Redux',
        start: '2018-12-06',
        end: '2019-01-01',
        importance: '3',
        members: ['Олег']
    },

    {
        id: 4,
        title: 'Задача 3',
        completed: false,
        description: 'Выучить Redux',
        start: '2018-06-15T11:01',
        end: '2018-06-15T12:01',
        importance: '3',
        members: ['Олег']
    },
];

export default todos;