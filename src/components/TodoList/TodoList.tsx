import React, {useState} from 'react';
import {Input} from '../Input/Input';
import {Button} from '../Button/Button';
import {FilterType, StateType} from '../../state/types';
import {TodoItem} from './TodoItem/TodoItem';

export type TodoListType={
  tasks:StateType
  addTask:(taskTitle:string)=>void
  deleteTask:(idTask:string)=>void
  filter:FilterType
  setFilter:(filter:FilterType)=>void
  changeTaskStatus:(idTask:string, checked:boolean) =>void
}

export const TodoList:React.FC<TodoListType> = ({tasks,addTask, deleteTask, filter, setFilter, changeTaskStatus}) => {
  let [taskTitle, setTaskTitle] = useState<string>('')

  let taskList = tasks.map(el => <TodoItem key={el.id} task={el} deleteTask={deleteTask}changeTaskStatus={changeTaskStatus}  />)

  let addNewTask=(taskTitle:string)=>{
    if(taskTitle.trim()){
      addTask(taskTitle)
      setTaskTitle('')
    }
  }


  return (
    <div>
      <div className="App">

        <Input
          name={'проверка'}
          value={taskTitle}
          className={''}
          onChange={setTaskTitle}/>
        <Button title={'Кнопка'} onClick={()=>addNewTask(taskTitle)}/>
        {taskList}
        <Button title={'all'} onClick={()=>setFilter('all')}/>
        <Button title={'completed'} onClick={()=>setFilter('completed')}/>
        <Button title={'active'} onClick={()=>setFilter('active')}/>

      </div>
    </div>
  );
};

