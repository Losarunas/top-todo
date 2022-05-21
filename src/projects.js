export default class Projects {

    static projects = []
    static projectsFilter = []

    static addProject(project) {
        this.projects.push(project)
    }

    static giveProjects() {
        if (this.projectsFilter.length === 0) {
            return this.projects;
        } else {
            let newArr = []
            this.projects.forEach(i => {
                this.projectsFilter.forEach(ind => {
                    if (ind === i.name) {
                        newArr.push(i)
                    }
                })
            })
            return newArr
        }

    }

    static removeMyProject(project) {
        let newArr = [...this.projects];
        const projectIndex = this.projects.findIndex(i => {
            return i.name === project;
        });
        newArr.splice(projectIndex, 1);
        this.projects = newArr
    }

    static filterToggle(project) {
        let index = this.projectsFilter.indexOf(project);
        if (index == -1) {
            this.projectsFilter.push(project);
        } else {
            let index = this.projectsFilter.indexOf(project);
            this.projectsFilter.splice(index, 1)
        }
    }

    static addTodo(todo, project) {
        let index = this.projects.findIndex(i => i.name === project);
        this.projects[index].todos.push(todo);
    }

    // HOW THIS WORK I DONT GET IT!!???
    static removeTodo(todo, project) {
        let newArr = [...this.projects]
        const projectIndex = this.projects.findIndex(i => i.name === project);
        const todoIndex = this.projects[projectIndex].todos.findIndex(i => i.title === todo)
        newArr[projectIndex].todos.splice(todoIndex, 1);
    }

    static changeTodoPriority(todo, project, sum) {
        let newArr = [...this.projects]
        const projectIndex = this.projects.findIndex(i => i.name === project);
        const todoIndex = this.projects[projectIndex].todos.findIndex(i => i.title === todo)
        newArr[projectIndex].todos[todoIndex].priority = sum;
    }
}