import { format } from 'date-fns';
import Projects from './projects';

export default class UI {
    static updateTodoList(todos) {
        let container = '';
        todos.forEach(project => project.todos.forEach(item => {
            container +=
                `<tr>
            <td>${item.title}</td>
            <td>${item.dueDate}</td>
            <td>${project.name}</td>
            <td>${item.date}</td>
            <td>
                <div class="main__table-priority">
                    <i class="fa-solid fa-arrow-up"></i>
                    <div class="main__table__add-todo__priority">${item.priority}</div>
                    <i class="fa-solid fa-arrow-down"></i>
                </div>
            </td>
            <td class="main__table__delete"><i class="fa-solid fa-trash-can"></i></td>
        </tr>`
        }))
        document.querySelector(".main__todolist").innerHTML = container;
    }

    static loadAddTodo() {
        document.querySelector('.main__add-todo').innerHTML = `<div class="main__todo-group">
        <label for="main__todo">Add todo</label>
        <input type="text" placeholder="Visit dancing school" id="main__todo">
    </div>
    <div class="main__todo-group">
        <label for="add-todo__select-projects">Project</label>
        <select name="add-todo__select-projects" class="main__add-todo__selection">

        </select>
    </div>
    <div class="main__todo-group main__todo-date">
        <label for="">Due Date</label>
        <input class="main__add-todo__date" type="date" name="trip-start" value="-"
            min="${format(new Date(), "yyyy-MM-dd")}">
    </div>

    <div class="main__todo-group">
        <label for="">Priority</label>
        <div class="main__todo-group--priority">
            <i class="fa-solid fa-arrow-up todo--priority-up"></i>
            <div class="main__table__add-todo__priority">1</div>
            <i class="fa-solid fa-arrow-down todo--priority-down"></i>
        </div>

    </div>
    <div class="main__todo-btn">
        <input class="button-primary" type="submit" value="ADD TODO">
    </div>`;

    }

    static updateProjects(projects) {
        let filtersCheck = Projects.getFilters();
        let editProjectState = Projects.editProject;
        let container = '';
        // If filter -> bold text
        projects.forEach(i => {
            let match = filtersCheck.find(index => i.name === index)
            if (editProjectState) {
                if (match) {
                    container += `<li class="navigation__project"><span class="navigation__project--name navigation__project--name--bold">${i.name}</span> <span class="navigation__project--remove">X</span></li>`
                } else {
                    container += `<li class="navigation__project"><span class="navigation__project--name">${i.name}</span><span class="navigation__project--remove">X</span></li>`
                }
            } else {
                if (match) {
                    container += `<li class="navigation__project"><span class="navigation__project--name navigation__project--name--bold">${i.name}</span></li>`
                } else {
                    container += `<li class="navigation__project"><span class="navigation__project--name">${i.name}</span></li>`
                }
            }

        });

        document.querySelector('.navigation__projects').innerHTML = container;

        // Add TODO form - updates projects list
        document.querySelector(".main__add-todo__selection").innerHTML = projects.map(i => `<option value="${i.name}">${i.name}</option>`);
    }

    static addNewProject() {
        document.querySelector('.navigation__new-project').innerHTML = `
    <form class="navigation__new-project-form">
    <input type="text" placeholder="your new project" class="navigation__new-project-field">
  </form> `

        document.querySelector('.navigation__new-project-field').focus();
        document.querySelector('.navigation-add-btn').innerHTML = '<i class="fa-solid fa-xmark"></i>'
    }

    static removeAddNewProject() {
        document.querySelector('.navigation__new-project').innerHTML = '';
        document.querySelector('.navigation-add-btn').innerHTML = '<i class="fa-solid fa-edit"></i>'
    }

    static cleanTodoField() {
        document.querySelector("#main__todo").value = "";
    }

    static notification(color, text) {
        document.querySelector('.header__notification').style.background = color;
        document.querySelector('.header__notification').innerHTML = text;
        document.querySelector('.header__notification').classList.add('header__notification--active');


        setTimeout(() => {
            document.querySelector('.header__notification').classList.remove('header__notification--active');
        }, "5000")

    }

}