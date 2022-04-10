import _ from 'lodash';
import './style.css';
import Todo from './todo.js';
import Project from './project.js';
import Projects from './projects.js';
import UI from './ui.js';
import { format } from 'date-fns';

const app = new Projects();
const defaultProject = new Project("Main");
const workProject = new Project("Work");
const studyProject = new Project("Study");

app.addProject(defaultProject);
app.addProject(workProject);
app.addProject(studyProject);

const todo2 = new Todo("Swim in ocean", format(new Date(), "yyyy-MM-dd"), "2018 - 01 - 25", 3);
// const todo3 = new Todo("Read", format(new Date(), "yyyy-MM-dd"), "2018 - 01 - 25", 3);
// const todo4 = new Todo("Sleep", format(new Date(), "yyyy-MM-dd"), "2018 - 01 - 25", 3);
// const todo5 = new Todo("Sing", format(new Date(), "yyyy-MM-dd"), "2018 - 01 - 25", 3);
// const todo6 = new Todo("Go for a walk", format(new Date(), "yyyy-MM-dd"), "2018 - 01 - 25", 3);
// const todo7 = new Todo("Become superhero", format(new Date(), "yyyy-MM-dd"), "2018 - 01 - 25", 3);

defaultProject.addTodo(todo2);
// studyProject.addTodo(todo3);
// workProject.addTodo(todo4);
// defaultProject.addTodo(todo5);
// studyProject.addTodo(todo6);
// workProject.addTodo(todo7);

UI.loadAddTodo();
UI.updateUI(app.getProjects());
UI.updateProjects(app.getProjects());




// Add priority +1 
document.querySelector(".todo--priority-up").addEventListener("click", () => {
    let priority = document.querySelector(".main__table__add-todo__priority");
    let priorityNum = parseInt(priority.innerHTML)
    if (priorityNum < 5) {
        priority.innerHTML = priorityNum + 1
    }
});

// Add priority -1 
document.querySelector(".todo--priority-down").addEventListener("click", () => {
    let priority = document.querySelector(".main__table__add-todo__priority");
    let priorityNum = parseInt(priority.innerHTML)
    if (priorityNum > 1) {
        priority.innerHTML = priorityNum - 1;
    }
});

document.querySelector(".main__add-todo").addEventListener("submit", (e) => {
    e.preventDefault();

    let todo = document.querySelector("#main__todo").value;
    let dueDate = document.querySelector('.main__add-todo__date').value;
    let dateNow = format(new Date(), "yyyy-MM-dd");
    let priority = document.querySelector('.main__table__add-todo__priority').innerHTML;
    let project = document.querySelector('.main__add-todo__selection').value;
    let newTodo = new Todo(todo, dateNow, dueDate, priority);

    app.addTodoTest(newTodo, project);
    Projects.addMyProject(newTodo);
    console.log(Projects.giveMyProjects());
    // UI.cleanTodoField;
    UI.loadAddTodo();
    UI.updateUI(app.getProjects());
})


// Add new project
document.querySelector('.navigation-add-btn').addEventListener('click', () => {
    document.querySelector('.navigation__new-project').innerHTML = `
    <form class="navigation__new-project-form">
    <input type="text" placeholder="your new project" class="navigation__new-project-field">
  </form> `

    document.querySelector('.navigation__new-project-form').addEventListener('submit', e => {
        e.preventDefault();
        let project = document.querySelector('.navigation__new-project-field').value;
        let newProject = new Project(project);
        app.addProject(newProject);
        UI.updateProjects(app.getProjects());
        document.querySelector('.navigation__new-project').innerHTML = '';
    })
})