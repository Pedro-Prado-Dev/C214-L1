import { Task, UpdateTask } from "../TodoList";

export class ToDoListAdapter {
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

    update (task: UpdateTask){
        try{
            const toUpdateTask = this.tasks.map(item => item.id === task.id ? {...item, ...task} : item)
            this.tasks = toUpdateTask
            return{
                success: true,
                error: null
            }
        } catch (error){
            return{
                success:null,
                error: 'Connot update task'
            }
        }
    }

    delete (id: number){
        try{
            const toDeleteTask = this.tasks.filter(item => item.id !== id)
            this.tasks = toDeleteTask
            return{
                success: true,
                error: null
            }
        } catch (error){
            return{
                success: null,
                error: true
            }
        }
    }
}