export default class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }
    getTodos() {
        return this.todos;
    }
    addTodo(todo) {
        this.todos.push(todo)
    }
}