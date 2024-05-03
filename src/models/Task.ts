export interface Task {
    id?: number,
    title: string,
    description: string,
    targetDate: string,
    type?: string,
    priority?: string,
    subTask?: Task[],
}

export interface UpdateTask {
    id: number
    title?: string,
    description?: string,
    targetDate?: string,
    type?: string,
    priority?: string,
    subTasks?: Task []
  }