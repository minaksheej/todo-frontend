import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { RouteGaurdService } from './service/route-gaurd.service';
import { TodoComponent } from './todo/todo.component';

//welcome routing
const routes: Routes = [
  //this one is default path
{path:'', component : LoginComponent},//can activate routegardservice
{path:'login', component : LoginComponent},
{path:'welcome/:name', component : WelcomeComponent, canActivate:[RouteGaurdService]},
{path:'todos', component :ListTodosComponent, canActivate:[RouteGaurdService]},
{path:'logout', component :LogoutComponent ,canActivate:[RouteGaurdService]},
{path:'todos/:id', component :TodoComponent ,canActivate:[RouteGaurdService]},
//order is important here 
{path:'**', component : ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
