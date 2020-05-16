//package com.in28minutes.springboot.web

//import org.springframwork.boot.SpringApplication
import { Component, OnInit } from '@angular/core';
//import another module 
import {AppComponent} from '../app.component'
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
//@ComponentScan(value="com.in28minutes.springboot.web")
//its called decorator in JS 
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

//public class WelcomeComponent implements OnInit
export class WelcomeComponent implements OnInit {
//JS style of declaring a string variable 
  //  message='some welocme message';
  message :String ='some welcome message using typeScript'
  name:''
  messageFromService:String;

  //Activated route:used to get parameter passed in addressbar
  constructor(private route:ActivatedRoute,
    private service:WelcomeDataService) {

   }
//void ngOnInit()
// adding void is typescript syntx 
  ngOnInit() :void {
    //compilation error this.message=5;
   //console.log(this.route.snapshot.params['name']);
   this.name=this.route.snapshot.params['name'];
}

getWelcomeMessage(){
  this.service.executeHelloWorldBeanService().subscribe(
    response=>this.handleSuccessfulResponse(response),
    error=>this.handleErrorResponse(error)
);
console.log("last line of retuning response from backend server");;
}
getWelcomeMessageWithPathVariable(){
  this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
    response=>this.handleSuccessfulResponse(response),
    error=>this.handleErrorResponse(error)
);
console.log("last line of retuning response from backend server");
}

handleSuccessfulResponse(response){
 this.messageFromService=response.message;
}

handleErrorResponse(error){
  console.log(error.error.message);
  this.messageFromService=error.error.message;

}
  

}

