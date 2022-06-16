import React, {useState} from 'react';
import './App.css';
import {initialState} from './state/state';
import {FilterType, StateType} from './state/types';
import {v1} from 'uuid';
import {TodoList} from './components/TodoList/TodoList';

function App() {
  let [tasks, setTasks] = useState<StateType>(initialState)
  let [filter, setFilter] = useState<FilterType>('all')

  const addTask = (taskTitle: string) => {
    setTasks([{id: v1(), task: taskTitle, completed: false}, ...tasks])
  }

  const deleteTask = (idTask: string) => {
    setTasks(tasks.filter(t => t.id !== idTask))
  }

  let filterTasks = tasks
  if (filter === 'completed') {
    filterTasks = tasks.filter(t => t.completed)
  }
  if (filter === 'active') {
    filterTasks = tasks.filter(t => t.completed)
  }
const changeTaskStatus = (idTask:string, checked:boolean) => {
  setTasks(tasks.map(e=> e.id===idTask ?{...e, completed:checked}: e))
}
  return (
    <TodoList
      filter={filter}
      tasks={filterTasks}
      addTask={addTask}
      deleteTask={deleteTask}
      setFilter={setFilter}
      changeTaskStatus={changeTaskStatus}
    />
  )

}

export default App;
