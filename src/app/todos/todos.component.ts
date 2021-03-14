import { EditTodoDialogComponent } from "./../edit-todo-dialog/edit-todo-dialog.component";
import { MatDialog } from "@angular/material/dialog";
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

  constructor(private dataService: DataService, private dialog: MatDialog) {}

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

    let dialogRef = this.dialog.open(EditTodoDialogComponent, {
      width: "700px",
      data: todo,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataService.updateTodo(index, result);
      }
    });

    // this.dataService.updateTodo()
  }
}
