export default class Projects {
    constructor() {
        this.projects = [];
    }

    static myProjects = []

    getProjects() {
        return this.projects;
    }

    static addMyProject(project) {
        this.myProjects.push(project)
    }

    static giveMyProjects() {
        return this.myProjects;
    }

    addProject(project) {
        this.projects.push(project)
    }

    addTodoTest(todo, project) {
        let index = this.projects.findIndex(i => i.name === project);
        this.projects[index].todos.push(todo);
    }
}