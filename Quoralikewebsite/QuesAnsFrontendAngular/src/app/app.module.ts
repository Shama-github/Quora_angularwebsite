import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import { GetoneanswerComponent } from './answer/getoneanswer/getoneanswer.component';
import { UpdateanswerComponent } from './answer/updateanswer/updateanswer.component';
import { DeleteanswerComponent } from './answer/deleteanswer/deleteanswer.component';
import { AddquestionComponent } from './question/addquestion/addquestion.component';
import { DeletequestionComponent } from './question/deletequestion/deletequestion.component';
import { GetonequestionComponent } from './question/getonequestion/getonequestion.component';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { CategoryComponent } from './home/category/category.component';
import { PagenotfoundComponent } from './home/pagenotfound/pagenotfound.component';



@NgModule({
  declarations: [
    
    AppComponent,
    HomeComponent,
    AdduserComponent,
    GetoneanswerComponent,
    UpdateanswerComponent,
    DeleteanswerComponent,
    AddquestionComponent,
    DeletequestionComponent,
    GetonequestionComponent,
    LoginComponent,
    LogoutComponent,
    CategoryComponent,
    PagenotfoundComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
