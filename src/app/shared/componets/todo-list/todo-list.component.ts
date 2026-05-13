import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../../models/toto';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @Input()
  todoArr: ITodo[] = [];

  @Output()
  deleteEmit = new EventEmitter<string>();

  @Output()
  editEmit = new EventEmitter<ITodo>();

  onDelete(id: string) {
    this.deleteEmit.emit(id);
  }

  onEdit(todo: ITodo) {
    this.editEmit.emit(todo);
  }
}