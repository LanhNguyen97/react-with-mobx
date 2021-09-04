import { makeAutoObservable } from "mobx";
export interface Todo {
  name: string;
  isCompleted?: boolean;
  assignee?: string;
}
class Store {
  todos: Todo[] = JSON.parse(localStorage.getItem("todoList") || "[]");
  newTodo: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  addTodo = (todo: Todo) => {
    this.todos.push(todo);
    this.newTodo = "";
    localStorage.setItem("todoList", JSON.stringify(this.todos));

    return this.todos;
  };

  removeTodo = (index: number) => {
    this.todos = this.todos.filter((todo, indexTodo) => indexTodo !== index);
    localStorage.setItem("todoList", JSON.stringify(this.todos));

    return this.todos;
  };

  updateItem = (index: number, item: Todo) => {
    this.todos = this.todos.map((todo, indexItem) => {
      if (indexItem === index) {
        todo = { ...todo, ...item };
      }
      return todo;
    });
    localStorage.setItem("todoList", JSON.stringify(this.todos));

    return this.todos;
  };
}

const store = new Store();

export default store;
