import { Injectable } from "@angular/core";
import { Todo } from "./todo.model";

@Injectable({
  providedIn: "root",
})
export class DataService {
  todos: Todo[] = [
    new Todo("This is one of my best life so far"),
    new Todo(
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum atque necessitatibus ipsam voluptate tempora deleniti sit aperiam dolores dicta.Ex illum quaerat nobis tenetur dolore sed.Dolorem non molestiae inventore!"
    ),
  ];

  constructor() {}

  getAllTodos() {
    return this.todos;
  }

  addTodos(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(index: number, updatedTodo: Todo) {
    this.todos[index] = updatedTodo;
  }

  deleteTodo() {
    console.log("item deleted")
  }
}
