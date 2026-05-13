import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import { ITodo } from '../../models/toto';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnChanges {

  @Input()
  editTodo: ITodo | null = null;

  @Output()
  todoEmit = new EventEmitter<ITodo>();

  todoItem: string = '';

  priority: 'Low' | 'Medium' | 'High' = 'Low';

  todoStatus: 'Pending' | 'Completed' = 'Pending';

  isImportant: boolean = false;

  todoId: string = '';

  btnName: string = 'Add Todo';

  ngOnChanges(changes: SimpleChanges): void {

    if (this.editTodo) {

      this.todoItem = this.editTodo.todoItem;
      this.priority = this.editTodo.priority;
      this.todoStatus = this.editTodo.todoStatus;
      this.isImportant = this.editTodo.isImportant;
      this.todoId = this.editTodo.todoId;

      this.btnName = 'Update Todo';

    }
  }

  onTodoAdd(): void {

    if (!this.todoItem || !this.todoItem.trim()) {
      alert("Please enter todo title");
      return;
    }

    const todoObj: ITodo = {
      todoId: this.todoId ? this.todoId : new Date().getTime().toString(),
      todoItem: this.todoItem,
      todoStatus: this.todoStatus,
      priority: this.priority,
      isImportant: this.isImportant
    };

    console.log("Sending Todo:", todoObj);

    this.todoEmit.emit(todoObj);

    this.resetForm();
  }

  resetForm(): void {
    this.todoItem = '';
    this.priority = 'Low';
    this.todoStatus = 'Pending';
    this.isImportant = false;
    this.todoId = '';
    this.btnName = 'Add Todo';

    // important: clear edit state
    this.editTodo = null;
  }
}