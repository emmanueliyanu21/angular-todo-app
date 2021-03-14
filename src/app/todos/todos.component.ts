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

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return alert("Form is invalid");
    console.log("form submited");
    console.log(form);
    this.dataService.addTodos(new Todo(form.value.text));
  }
}
