export default class Todo {
    constructor(title, date, dueDate, priority) {
        this.title = title;
        this.date = date;
        this.dueDate = dueDate;
        this.priority = priority;
        this.finished = false;
    }
}