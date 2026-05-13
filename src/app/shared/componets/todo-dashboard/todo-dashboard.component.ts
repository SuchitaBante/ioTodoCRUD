import { Component } from '@angular/core';
import { ITodo } from '../../models/toto';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent {

  todoArr: ITodo[] = [

    {
      todoId: '1',
      todoItem: 'Learn Angular',
      todoStatus: 'Pending',
      priority: 'High',
      isImportant: true
    },

    {
      todoId: '2',
      todoItem: 'Practice TypeScript',
      todoStatus: 'Completed',
      priority: 'Low',
      isImportant: false
    },

    {
      todoId: '3',
      todoItem: 'Build Todo App',
      todoStatus: 'Pending',
      priority: 'High',
      isImportant: true
    },

    {
      todoId: '4',
      todoItem: 'Learn Bootstrap',
      todoStatus: 'Completed',
      priority: 'Medium',
      isImportant: false
    },

    {
      todoId: '5',
      todoItem: 'Watch Angular Videos',
      todoStatus: 'Pending',
      priority: 'Medium',
      isImportant: true
    }

  ];

  editTodo: ITodo | null = null;

 
  onAddTodo(todo: ITodo) {

    const index = this.todoArr.findIndex(
      t => t.todoId === todo.todoId
    );

    if (index === -1) {

      this.todoArr = [...this.todoArr, todo];

    } else {

      
      const updatedArr = [...this.todoArr];
      updatedArr[index] = todo;
      this.todoArr = updatedArr;

    }
  }

  onDeleteTodo(id: string) {
    this.todoArr = this.todoArr.filter(todo => todo.todoId !== id);
  }

  
  onEditTodo(todo: ITodo) {
    this.editTodo = todo;
  }
}