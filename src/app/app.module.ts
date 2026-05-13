import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './shared/componets/todo-form/todo-form.component';
import { TodoListComponent } from './shared/componets/todo-list/todo-list.component';
import { TodoDashboardComponent } from './shared/componets/todo-dashboard/todo-dashboard.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoDashboardComponent
  ],
imports: [
  BrowserModule,
  FormsModule
],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
