import { Component, OnInit } from '@angular/core';
import {Todo} from "../../Todo"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  localItem: string | null;
  todos: Todo[] = [];

  constructor() {
    // Ensure localStorage is available
    if (typeof window !== 'undefined' && localStorage) {
      this.localItem = localStorage.getItem('todos');
      if (this.localItem === null) {
        this.todos = [];
      } else {
        this.todos = JSON.parse(this.localItem);
      }
    } else {
      this.localItem = null;
      this.todos = [];
    }
  }

  ngOnInit(): void {
    // No need to initialize anything here
  }

  deleteTodo(todo: Todo): void {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

  addTodo(todo: Todo): void {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
