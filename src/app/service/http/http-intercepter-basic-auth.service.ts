import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{
  constructor(private basicAuthenticationService:BasicAuthenticationService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler){
    // let userName='user'
    // let password='password'
    // let basicAuthHeaderString='Basic '+window.btoa(userName+':' +password)
    let userName=this.basicAuthenticationService.getAuthenticatedUser();
    let basicAuthHeaderString=this.basicAuthenticationService.getAuthenticatedToken();
    //request:which ever request is going out
    if(userName &&  basicAuthHeaderString){
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      })
    }    
    return next.handle(request);
  }

}
