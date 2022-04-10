import { format } from 'date-fns'
import Projects from './projects.js'

export default class UI {
    static updateUI(todos) {
        // console.log(app.getProjects())
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
            <td class="main__table__edit"><i class="fa-solid fa-pencil"></i></td>
            <td class="main__table__delete"><i class="fa-solid fa-trash-can"></i></td>
        </tr>`
        }))
        document.querySelector(".main__todolist").innerHTML = container;
    }


    // Add new TODO UI
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
        let container = '';
        projects.forEach(i => container += `<li class="navigation__project">${i.name}</li>`);
        document.querySelector('.navigation__projects').innerHTML = container;

        // ADD TODO - update option list
        document.querySelector(".main__add-todo__selection").innerHTML = projects.map(i => `<option value="${i.name}">${i.name}</option>`);
    }

    static cleanTodoField() {
        document.querySelector("#main__todo").value = "";
        document.querySelector("#main__todo").value = "";
        document.querySelector("#main__todo").value = "";
    }
}