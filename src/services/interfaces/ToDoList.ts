import { Task, UpdateTask } from "../../models/Task";


export interface TodoListInt {
    add:(task: Task) => void|string|Error
    getTasks: () => Task[] | string | unknown
    updateTask:(task: UpdateTask) => void
    removeTask: (index: number) => void
}