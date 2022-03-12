export default class Projects {
    constructor() {
        this.projects = [];
        this.filter = []
    }
    getProjects() {
        return this.projects;
    }
    addProject(project) {
        this.projects.push(project)
    }
}