import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private httpClient:HttpClient) { }

  authenticate(username,password){
    console.log('before' + this.isUserLoggedIn());
    if(username==="admin" && password==="dummy"){
      sessionStorage.setItem("authenticatedUser",username);  
      console.log('after ' + this.isUserLoggedIn());
    
      return true;
    }
  return false;
  }

  

  executeAuthenticationService(username, password) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)
    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.httpClient.get<AuthenticationBean>(`http://localhost:8080/basicauth`,
      { headers: header }).pipe(
        map(
          data=>{
            sessionStorage.setItem("authenticatedUser",username);  
            sessionStorage.setItem("token",basicAuthHeaderString);
            return data;
          }
        )
      );

  }

  // Access to XMLHttpRequest at 'http://localhost:8080/hello-world/path-variable/admin' 
  //from origin 'http://localhost:4200' has been blocked by CORS policy: 
  //No 'Access-Control-Allow-Origin' header is present on the requested resource.

  getAuthenticatedUser(){
    return sessionStorage.getItem("authenticatedUser"); 
  }

  getAuthenticatedToken(){
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem("token"); 
    }
  }

  isUserLoggedIn(){
    let user=sessionStorage.getItem("authenticatedUser"); 
    return !(user===null);
  }

  loggedOut(){
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('token');
  }

 
 
}

export class AuthenticationBean {
  constructor(public message:String) {
    
  }
}
