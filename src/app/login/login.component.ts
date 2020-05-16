import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='in28Mintues';
  password='';
  errorMessage='invalid credentials'
  invalidLogin=false
  //to redirect from login to welcome page we need to add router module and redirect and that we can do using 
  //dependecy injection that will pass into contructor 
  //contructor parameter in typescript is bydefault membervariable
  constructor(private router:Router,
   private  hardcodedAuthenticationService:HardcodedAuthenticationService,
   private basicAuthenticationService:BasicAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){
    // if(this.username==="admin" && this.password==="dummy")
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.router.navigate(['welcome',this.username])
      this.invalidLogin=false;
    }else{
      this.invalidLogin=true;
    }
  }

  handleBasicAuthLogin(){     
    this.basicAuthenticationService.executeAuthenticationService(this.username,this.password).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['welcome',this.username])
        this.invalidLogin=false; 
        
      },
      error=>{
        console.log(error);
        this.invalidLogin=true;

      }
    );
    
    
    } 

}
