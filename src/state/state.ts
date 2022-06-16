import {v1} from 'uuid';
import {StateType} from './types';

export const initialState:StateType =[
  {
    id:v1(),
    task: 'Сделать домашку',
    completed: false
  },
  {
    id:v1(),
    task: 'Посмотреть видосы собесов',
    completed: false
  },
  {
    id:v1(),
    task: '5 видосов Соц Сети',
    completed: false
  },

]