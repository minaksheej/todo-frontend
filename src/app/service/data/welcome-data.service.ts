import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message:String){
    
  }
}
@Injectable({
  providedIn: 'root'
})


export class WelcomeDataService {

  constructor(private httpClient:HttpClient) { }

  executeHelloWorldBeanService(){
    return this.httpClient.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    
  }

  executeHelloWorldBeanServiceWithPathVariable(name){
    // let basicAuthHeaderString=this.createBasicAuthenticationHttpHeader();
    // let header= new HttpHeaders({
    //   Authorization:basicAuthHeaderString
    // })
    return this.httpClient.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);//,
    // {headers:header});
    
  }

  // Access to XMLHttpRequest at 'http://localhost:8080/hello-world/path-variable/admin' 
  //from origin 'http://localhost:4200' has been blocked by CORS policy: 
  //No 'Access-Control-Allow-Origin' header is present on the requested resource.

  // createBasicAuthenticationHttpHeader(){
  //   let userName='user'
  //   let password='password'
  //   let basicAuthHeaderString='Basic '+window.btoa(userName+':' +password)
  //   return basicAuthHeaderString;
  // }
 
}


