import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient:HttpClient) { }

  retiveAllTodoList(name){
    console.log("name of user "+name);
    return this.httpClient.get<Todo>(`http://localhost:8080/users/${name}/todos`);    
  }

  deleteTodo(id,name){
    return this.httpClient.delete(`http://localhost:8080/users/${name}/todos/${id}`);
  }

  retriveTodo(id,name){
    console.log('data');
    return this.httpClient.get<Todo>(`http://localhost:8080/users/${name}/todos/${id}`);
  }

  updateTodo(id,name,todo){
    console.log('data');
    return this.httpClient.put(`http://localhost:8080/users/${name}/todos/${id}`,todo);
  }

  addTodo(name,todo){
    console.log('data');
    return this.httpClient.post(`http://localhost:8080/users/${name}/todos`,todo);
  }
}
