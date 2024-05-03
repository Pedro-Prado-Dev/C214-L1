import { Task, UpdateTask } from "../models/Task"
import { TodoListRepository } from "../repository/TodoListRepository"

export class ToDoListAdapter implements TodoListRepository{
    tasks: Task [] =[]

    create (task: Task){
        try{
            this.tasks.push(task)
            return{
                success: true,
                error: null
            }
        } catch (error){
            return{
                success: null,
                error: 'Cannot create task'
            }
        }
    }

    getAll (){
        try{
            return{
                success: this.tasks,
                error: null
            }
        } catch(error){
            return{
                success: null,
                error: 'Cannot get tasks'
            }
        }
    }

    update(task: UpdateTask) {
        try {
            const index = this.tasks.findIndex(item => item.id === task.id);
            if (index !== -1) {
                this.tasks[index] = { ...this.tasks[index], ...task };
                return {
                    success: true,
                    error: null
                };
            } else {
                return {
                    success: null,
                    error: 'Task not found'
                };
            }
        } catch (error) {
            return {
                success: null,
                error: 'Cannot update task'
            };
        }
    }

    delete(id: number) {
        const index = this.tasks.findIndex(item => item.id === id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            return {
                success: true,
                error: null
            };
        } else {
            return {
                success: null,
                error: 'Task not found'
            };
        }
    }
}