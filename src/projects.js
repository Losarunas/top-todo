export default class Projects {

    static projects = []
    static projectsFilter = []
    static editProject = false;

    static addProject(project) {
        this.projects.push(project);
        this.updateLocalStorage();
    }

    static giveProjects() {
        return this.projects;
    }

    static giveFilteredProjects() {
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
        this.updateLocalStorage();
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
        this.updateLocalStorage();
    }

    static getFilters() {
        return this.projectsFilter
    }

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
        this.updateLocalStorage();
    }

    static getProjectNames() {
        return this.projects.map(i => i.name)
    }

    static toggleEditProject() {
        this.editProject = !this.editProject
    }

    static updateLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.projects));
    }

    static getFromLocalStorage() {
        if (localStorage.getItem('todo')) {
            let retrievedObject = localStorage.getItem('todo');
            this.projects = JSON.parse(retrievedObject)
        } else {
            const firstTodo = [{ "name": "Home", "todos": [{ "title": "Dance tango", "date": "2022-06-11", "dueDate": "2025-06-25", "priority": 5, "finished": false }] }, { "name": "Work", "todos": [{ "title": "This project", "date": "2022-06-10", "dueDate": "2025-07-26", "priority": 5, "finished": false }] }, { "name": "You can filter US by clicking", "todos": [] }]
            this.projects = firstTodo;
            localStorage.setItem('todo', '');
        }
    }
}