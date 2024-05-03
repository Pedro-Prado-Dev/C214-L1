import { ToDoList } from "./TodoList"
import { Task, UpdateTask } from "../models/Task"
import { TodoListRepository } from "../repository/TodoListRepository"

const anyTask : Task ={
    id: 0,
    title: 'any_title',
    description: 'any_description',
    targetDate: '01/01/2025',
    type: 'any_type',
    priority: '1',
    subTask: []
}

const makeRepositoryStub= (): TodoListRepository =>{
    class TodoListStub implements TodoListRepository{
        create(task: Task) {
            return{
                success:true,
                error:null
            }
        }
    
        getAll() {
            return{
                success:[anyTask],
                error:null
            }
        }
    
        update(task: UpdateTask) {
            return{
                success:true,
                error:null
            }
        }
        delete(id: number) {
            return{
                success:true,
                error:null
            }
        }
    }
    return new TodoListStub()
}
describe('ToDoList', ()=> {
    describe('Testing add', ()=>{
        test('should add a new task to the list', () => {
            const repositoryStub = makeRepositoryStub()
            const todoInstance =new ToDoList(repositoryStub)
            todoInstance.add(anyTask)
            const tasks = todoInstance.getTasks()
            expect(tasks).toEqual([anyTask])
        })

        test('should add a valid tasks', () => {
            const repositoryStub = makeRepositoryStub()
            const todoInstance =new ToDoList(repositoryStub)
            const invalidValue: any = {
                invalidField: 'invalidValue'
            }
            const response = todoInstance.add(invalidValue)
            expect(response).toEqual('Missing properties in task object')
        })
    })
    describe('getTasks', () =>{
        test('should initialize tasks with an empty array', () => {
            const repositoryStub = makeRepositoryStub()
            jest.spyOn(repositoryStub, 'getAll').mockReturnValueOnce({
                success:[],
                error:null
            })
            const todoInstance = new ToDoList(repositoryStub)
            const response = todoInstance.getTasks()
            expect(response).toEqual([])
        })
    })
    // describe('Testing updateTask', () => {
    //     test('should update an existing task in the list', () => {
    //         const repositoryStub = makeRepositoryStub()
    //         const todoInstance =new ToDoList(repositoryStub)
    //         const updatedTask = {
    //             id: 0,
    //             title: 'updated_title',
    //             description: 'updated_description',
    //             targetDate: '02/02/2025',
    //             type: 'updated_type',
    //             priority: '2',
    //             subTasks: [] 
    //         }
    //         todoInstance.add(anyTask)
    //         todoInstance.updateTask(updatedTask)
    //         const tasks = todoInstance.getTasks()
    //         expect(tasks).toEqual([updatedTask])
    //     })
    // })
    
    // describe('Testing removeTask', () => {
    //     test('should remove an existing task from the list', () => {
    //         const repositoryStub = makeRepositoryStub()
    //         const todoInstance =new ToDoList(repositoryStub)
    //         todoInstance.add(anyTask)
    //         todoInstance.removeTask(0)
    //         const tasks = todoInstance.getTasks()
    //         expect(tasks).toEqual([])
    //     })
    
    //     test('should not remove a task with an invalid index', () => {
    //         const repositoryStub = makeRepositoryStub()
    //         const todoInstance =new ToDoList(repositoryStub)
    //         todoInstance.add(anyTask)
    //         todoInstance.removeTask(1) // Trying to remove a task with an index that doesn't exist
    //         const tasks = todoInstance.getTasks()
    //         expect(tasks).toEqual([anyTask])
    //     })
    // })
})