import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from "../../../../src/app/Todo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent{
  @Input() todo: Todo = new Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    
  }
  onClick(todo: Todo){
    this.todoDelete.emit(todo)
    console.log('onc trig')
  }
}
