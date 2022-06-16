import React from 'react';
import {TaskType} from '../../../state/types';
import s from './TodoItem.module.css'
import {Button} from '../../Button/Button';
export type TodoItemType ={
  task:TaskType
  deleteTask:(idTask:string)=>void
  changeTaskStatus:(idTask:string, checked:boolean) =>void
}

export const TodoItem:React.FC<TodoItemType> = ({task, deleteTask, changeTaskStatus}) => {


  return (
    <div className={task.completed? s.checked :s.item}>
      <div>{task.task}</div>
      <input
        type="checkbox"
        onChange={(e)=>changeTaskStatus(task.id, e.currentTarget.checked)}
      checked={task.completed}
      />
      <Button
        className={''}
        onClick={()=>deleteTask(task.id)}
        title={'x'}
      />
    </div>
  );
};

