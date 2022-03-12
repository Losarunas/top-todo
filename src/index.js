import _ from 'lodash';
import './style.css';
import Todo from './todo.js';
import Project from './project.js';
import Projects from './projects.js';
import UI from './ui.js'
import { format } from 'date-fns'

const app = new Projects();
const defaultProject = new Project("Main");
const workProject = new Project("Work");
const studyProject = new Project("Study");

app.addProject(defaultProject);
app.addProject(workProject);
app.addProject(studyProject);

const todo1 = new Todo("Dance", "2015 - 01 - 15", format(new Date(), "yyyy-MM-dd"), 2);
const todo2 = new Todo("Swim in ocean", format(new Date(), "yyyy-MM-dd"), "2018 - 01 - 25", 3);
const todo3 = new Todo("Read", format(new Date(), "yyyy-MM-dd"), "2018 - 01 - 25", 3);
const todo4 = new Todo("Sleep", format(new Date(), "yyyy-MM-dd"), "2018 - 01 - 25", 3);
const todo5 = new Todo("Sing", format(new Date(), "yyyy-MM-dd"), "2018 - 01 - 25", 3);
const todo6 = new Todo("Go for a walk", format(new Date(), "yyyy-MM-dd"), "2018 - 01 - 25", 3);
const todo7 = new Todo("Become superhero", format(new Date(), "yyyy-MM-dd"), "2018 - 01 - 25", 3);
defaultProject.addTodo(todo1);
defaultProject.addTodo(todo2);
studyProject.addTodo(todo3);
workProject.addTodo(todo4);
defaultProject.addTodo(todo5);
studyProject.addTodo(todo6);
workProject.addTodo(todo7);



// document.querySelector("#add-todo").addEventListener("submit", (e) => {
//     e.preventDefault();
//     let todo = document.querySelector("#todo").value;
//     let dateNow = format(new Date(), "MMM-dd")

//     let newTodo = new Todo(todo, dateNow, 'never', 1);
//     defaultProject.addTodo(newTodo);

//     UI.updateUI(defaultProject.getTodos());
//     UI.cleanTodoInput();
// })


// document.querySelector("#add-project").addEventListener("submit", (e) => {
//     e.preventDefault();

//     let project = document.querySelector("#project").value;
//     const newProject = new Project(project);
//     app.addProject(newProject);

//     UI.updateProjects(app.getProjects());
//     UI.cleanProjectInput();
// })

// document.querySelector(".main__add-todo__selection").innerHTML = app.getProjects.map(i => `<option value="${i.name}">${i.name}</option>`)

UI.updateUI(app.getProjects());
UI.updateProjects(app.getProjects());