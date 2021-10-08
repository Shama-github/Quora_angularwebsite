import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteanswerComponent } from './answer/deleteanswer/deleteanswer.component';
import { GetoneanswerComponent } from './answer/getoneanswer/getoneanswer.component';
import { UpdateanswerComponent } from './answer/updateanswer/updateanswer.component';

import { CategoryComponent } from './home/category/category.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './home/pagenotfound/pagenotfound.component';

import { AddquestionComponent } from './question/addquestion/addquestion.component';
import { DeletequestionComponent } from './question/deletequestion/deletequestion.component';
import { GetonequestionComponent } from './question/getonequestion/getonequestion.component';

import { AdduserComponent } from './user/adduser/adduser.component';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';


const routes: Routes = [
  {path:'Home', component:HomeComponent},
  {path:'Category',component:CategoryComponent},
  {path:'Login',component:LoginComponent},
  {path:'Register',component:AdduserComponent},
  {path:'logout',component:LogoutComponent},
  {path:'AddQuestion',component:AddquestionComponent},
  {path:'myanswers',component:GetoneanswerComponent},
  {path:'myquestions',component:GetonequestionComponent},
  {path:'myquestions/:id',component:DeletequestionComponent},
  {path:'updateanswer/:id',component:UpdateanswerComponent},
  {path:'deleteanswer/:id',component:DeleteanswerComponent},
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
