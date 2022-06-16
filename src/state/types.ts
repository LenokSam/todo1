export type StateType =Array<TaskType>


export type TaskType={
  id:string
  task: string
  completed: boolean
}

export type FilterType= 'all' | 'completed' | 'active'

