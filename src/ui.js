export default class UI {
    static updateUI(todos) {
        let container = '';
        todos.forEach(item => {
            container +=
                `<tr>
            <td>${item.title}</td>
            <td>${item.dueDate}</td>
            <td>Work</td>
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
        })
        document.querySelector(".main__todolist").innerHTML = container;
    }
    // static cleanTodoInput() {
    //     document.querySelector("#todo").value = "";
    // }
    // static cleanProjectInput() {
    //     document.querySelector("#project").value = "";
    // }

    static updateProjects(projects) {
        let container = '';
        projects.forEach(i => container += `<li class="navigation__project">${i.name}</li>`);
        document.querySelector('.navigation__projects').innerHTML = container;
    }
}