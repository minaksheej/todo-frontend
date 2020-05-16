import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(public id:number,
    public description:String,
    public  done:boolean,
    public targetDate:Date){

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[]
  message:String
  // todos=[
  //   new Todo(1,'learn to dance',false,new Date()),
  //   new Todo(1,'become an expert in Angular',false,new Date()),
  //   new Todo(3,'visit London',false,new Date())
  //   // {id: 1, description:'learn to dance'},
  //   // {id:2,description:'become an expert in Angular'},
  //   // {id:3,description:'visit London'}
  // ]
  //creating object in Js
  // todo ={
  //   id :1,
  //   description: 'Learn to dance'
  // }

  constructor(private todoDataService:TodoDataService,
    private router:Router) { 
    
  }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoDataService.retiveAllTodoList('Minakshi').subscribe(
      response=>this.handleSuccessfulResponse(response)
    );
  }
  handleSuccessfulResponse(response){
    this.todos=response;
   }

   deleteTodo(id){     
     console.log(`delete todo ${id}`);
     this.todoDataService.deleteTodo(id,'Minakshi').subscribe(
       response=>{
         this.message=`delete successfull for id  ${id}`;
         this.refreshTodos();
       }

     ); 
   }

   updateTodo(id){
     console.log(`update todo ${id}`);
     this.router.navigate(['todos',id]);
   }

   addTodo(){
    this.router.navigate(['todos',-1]);
   }

}
