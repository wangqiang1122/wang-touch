import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import {  IndexComponentComponent } from './index-component/index-component.component'
import { ListComponent } from './list/list.component';


const routes: Routes = [
  // { path:'index', component: HomeComponentComponent },
  // { path:'home', component: IndexComponentComponent },
  // 针对空字符串的 需要 pathMatch:'full'
  { path: '', redirectTo:'/index', pathMatch:'full'},
  { path:'index', component: IndexComponentComponent },
  { path:'home/:id', component: HomeComponentComponent, children:[
     { path: 'list', component: ListComponent }
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
