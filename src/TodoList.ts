export type Task = {
    title: string,
    description: string,
    targetDate: string,
    type?: string,
    priority?: string,
    subTask?: Task [],
}

export class ToDoList{
    private tasks: Task[] = []

    add (task: Task) {
        const missingProperties = ['title', 'description', 'targetDate'].filter(
          (prop) => !Object.keys(task).includes(prop)
        )
        try {
          if (missingProperties.length > 0) {
            return 'Missing properties in task object'
          }
          this.tasks.push(task)
        } catch (error) {
          return error
        }
      }

    getTasks(){
        return this.tasks
    }
}