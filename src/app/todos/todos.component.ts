import { Component, OnInit } from "@angular/core";
import { Todo } from "../shared/todo.model";
import { DataService } from "../shared/data.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.scss"],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  showValidationErrors: boolean;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return (this.showValidationErrors = true);
    console.log("form submited");
    console.log(form);
    this.dataService.addTodos(new Todo(form.value.text));
    this.showValidationErrors = false;
    form.reset();
  }

  toggleCompleted(todo: Todo) {
    // set todo to completed
    todo.completed = !todo.completed;
  }

  editTodo(todo: Todo) {
    // we need the index of the todo
    const index = this.todos.indexOf(todo);

    // this.dataService.updateTodo()
  }
}
