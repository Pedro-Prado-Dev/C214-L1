import { ToDoListAdapter } from "./adapters/ToDoListAdapter"

export type Task = {
    id?: number,
    title: string,
    description: string,
    targetDate: string,
    type?: string,
    priority?: string,
    subTask?: Task[],
}

export type UpdateTask = {
    id: number
    title?: string,
    description?: string,
    targetDate?: string,
    type?: string,
    priority?: string,
    subTasks?: Task []
  }

export class ToDoList {
    add(task: Task) {
        const missingProperties = ['title', 'description', 'targetDate'].filter(
            (prop) => !Object.keys(task).includes(prop)
        )
        try {
            if (missingProperties.length > 0) {
                return 'Missing properties in task object'
            }
            const adapter = new ToDoListAdapter()
            adapter.create(task)
        } catch (error) {
            return error
        }
    }

    getTasks() {
        return new ToDoListAdapter().getAll()
    }

    updateTask(task: UpdateTask) {
        new ToDoListAdapter().update(task)
    }
    
    removeTask(index: number) {
        new ToDoListAdapter().delete(index)
    }
}