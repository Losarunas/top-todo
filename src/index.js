import _ from 'lodash';
import './style.css';
import Todo from './todo.js';
import Project from './project.js';
import Projects from './projects.js';
import UI from './ui.js';
import { format } from 'date-fns';


// Random todos
const defaultProject = new Project("Main");
const schoolProject = new Project("School");

Projects.addProject(defaultProject);
Projects.addProject(schoolProject);

const todo2 = new Todo("Swim in ocean", format(new Date(), "yyyy-MM-dd"), "2018-06-25", 2);
const todo3 = new Todo("Dance tango", format(new Date(), "yyyy-MM-dd"), "2019-11-03", 5);
const todo4 = new Todo("Finish Homework", format(new Date(), "yyyy-MM-dd"), "2012-11-03", 2);

defaultProject.addTodo(todo2);
defaultProject.addTodo(todo3);
schoolProject.addTodo(todo4);

UI.loadAddTodo();
UI.updateTodoList(Projects.giveProjects());
UI.updateProjects(Projects.giveProjects());

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

// Add new todo
document.querySelector(".main__add-todo").addEventListener("submit", (e) => {
    e.preventDefault();

    let todo = document.querySelector("#main__todo").value;
    if (todo) {
        let dueDate = document.querySelector('.main__add-todo__date').value;
        let dateNow = format(new Date(), "yyyy-MM-dd");
        let priority = document.querySelector('.main__table__add-todo__priority').innerHTML;
        let project = document.querySelector('.main__add-todo__selection').value;
        let newTodo = new Todo(todo, dateNow, dueDate, priority);

        Projects.addTodo(newTodo, project);

        UI.updateTodoList(Projects.giveProjects());

        // Clean fields after adding new todo
        document.querySelector("#main__todo").value = '';
        document.querySelector('.main__add-todo__date').value = '-';
        document.querySelector('.main__table__add-todo__priority').innerHTML = '1';
    }

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
        Projects.addProject(newProject);
        UI.updateProjects(Projects.giveProjects());
        document.querySelector('.navigation__new-project').innerHTML = '';
    })
})

// remove todo OR change tasks priority

document.querySelector(".main__all-todos").addEventListener("click", e => {
    e.preventDefault()
    if (e.target.className == "fa-solid fa-trash-can") {
        let targetTodo = e.target.parentElement.parentElement.children[0].innerHTML;
        let targetProject = e.target.parentElement.parentElement.children[2].innerHTML;
        Projects.removeTodo(targetTodo, targetProject)
        UI.updateTodoList(Projects.giveProjects());
    }

    // TODO priority for already added TODO add or minus
    if (e.target.className == "fa-solid fa-arrow-down" || e.target.className == "fa-solid fa-arrow-up") {
        let priorityNum = e.target.parentElement.children[1].innerHTML;
        let targetTodo = e.target.parentElement.parentElement.parentElement.children[0].innerHTML
        let targetProject = e.target.parentElement.parentElement.parentElement.children[2].innerHTML;
        // Task priority - 1 
        if (e.target.className == "fa-solid fa-arrow-down" && priorityNum > 1) {
            Projects.changeTodoPriority(targetTodo, targetProject, parseInt(priorityNum) - 1)
        }
        // Task priority + 1 
        if (e.target.className == "fa-solid fa-arrow-up" && priorityNum < 5) {
            Projects.changeTodoPriority(targetTodo, targetProject, parseInt(priorityNum) + 1)
        }
        UI.updateTodoList(Projects.giveProjects());
    }


})

// remove project AND 
// sort projects
document.querySelector(".navigation__projects").addEventListener("click", e => {
    // remove project 
    if (e.target.className == "navigation__project--remove") {
        Projects.removeMyProject(e.target.parentElement.firstChild.innerText)
        UI.updateProjects(Projects.giveProjects());
        UI.updateTodoList(Projects.giveProjects());
    }
    // SORT
    if (e.target.className == "navigation__project--name") {
        Projects.filterToggle(e.target.textContent);
        UI.updateTodoList(Projects.giveProjects());
    }

})





// SORT BY DUE DATE, sort by creation date, DEFAULT sort by priority and creation date and sort by project