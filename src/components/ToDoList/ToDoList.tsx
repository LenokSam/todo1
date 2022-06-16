import React, {useState} from 'react';
import {DataTasksType, FilterType} from '../../state/types';
import ToDoItem from './ToDoItem';
import Button from '../Button/Button';

export type ToDoListType = {
  initialTasks: DataTasksType
  removeTask:(id:string)=>void
  setFilter:(filter:FilterType)=> void
  addTask:(name:string)=> void
}

export const ToDoList: React.FC<ToDoListType> = ({initialTasks, removeTask, setFilter,addTask}) => {
  const list = initialTasks.map(t => <ToDoItem task={t} removeTask={removeTask}/>)
  const [text, setText]=useState<string>('')

  const addNewTask=(name:string)=>{
    addTask(name)
    setText('')
  }

  return (
    <div>
      <input type={'text'} value={text} onChange={e=>setText(e.currentTarget.value)}></input>
      <Button name={'add'} callback={()=> addNewTask(text)}/>
      {list}
      <Button name={'All'} callback={()=>setFilter('all')}></Button>
      <Button name={'new'} callback={()=>setFilter('new')}></Button>
      <Button name={'completed'} callback={()=>setFilter('completed')}></Button>
    </div>
  );
};

