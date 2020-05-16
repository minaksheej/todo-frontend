import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id:number
  todo:Todo

  constructor(private todoDataService:TodoDataService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];//get id from screen url
    this.todo=new Todo(this.id,'',false,new Date());//this is to avoid console error message that is coming may be because toso is null
    if(this.id!=-1){
      this.todoDataService.retriveTodo(this.id,'admin').subscribe(
        data=>this.todo=data
      );
    }
    
  }

  saveTodo(){
    if(this.id===-1){
        this.todoDataService.addTodo('admin',this.todo).subscribe(
          data=>{
            console.log(data);
            this.router.navigate(['todos']);
          }
        );
    }else{
      this.todoDataService.updateTodo(this.id,'admin',this.todo).subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['todos']);
        }
      );
    }
   
  }

}
