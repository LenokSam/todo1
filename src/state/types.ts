
export type TodoListTaskType={
  id: string
  title: string
  isDone:boolean
}

export type DataTasksType = Array<TodoListTaskType>

export type FilterType= 'all' | 'new'  | 'completed'