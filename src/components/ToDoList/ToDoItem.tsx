import React from 'react';
import {TodoListTaskType} from '../../state/types';
import Button from '../Button/Button';

export type ToDoItemType ={
  task:TodoListTaskType
  removeTask:(id:string)=>void
}

const ToDoItem: React.FC<ToDoItemType> = ({task,removeTask}) => {
  return (
    <div>
      <input key={task.id} type="checkbox" checked={task.isDone}/>
      <span>{task.title}</span>
      <Button name={'x'} callback={()=>removeTask(task.id)}/>
    </div>
  );
};

export default ToDoItem;