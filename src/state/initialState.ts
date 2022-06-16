import {v1} from 'uuid';
import {DataTasksType} from './types';

export const initialTodoList: DataTasksType = [
  {
    id: v1(),
    title: 'Title 1',
    isDone: true
  },
    {
    id: v1(),
    title: 'Title 2',
    isDone: true
  },
    {
    id: v1(),
    title: 'Title 2',
    isDone: false
  },
    {
    id: v1(),
    title: 'Title 3',
    isDone: false
  },

]