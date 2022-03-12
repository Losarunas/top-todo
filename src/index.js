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

const todo1 = new Todo("Dance", "2015 - 01 - 15", "2015 - 01 - 25", 2);
const todo2 = new Todo("Swim in ocean", format(new Date(), "yyyy-MMM-dd"), "2018 - 01 - 25", 3);
defaultProject.addTodo(todo1);
defaultProject.addTodo(todo2);
console.log(defaultProject)


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

UI.updateUI(defaultProject.getTodos());
UI.updateProjects(app.getProjects());