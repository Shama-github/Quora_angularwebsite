import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuesAnsFrontendAngular';
  users:any
  categories:any
 userName:any
 userEmail:any
  

  constructor(u:UserService,private router:Router) {
    u.Getall().subscribe((data) => {
      this.users = data;
      console.log(data);
    });
  
  }
  setcategory(value:string){
    //let category: string[] = ['Java','C#', 'Python','Big Data']; 
    if(value=="Java"){sessionStorage.setItem('Category','Java');}
    else if(value=="C#"){sessionStorage.setItem('Category','C#');}
    else if(value=="Python"){sessionStorage.setItem('Category','Python');}
    else if(value=="Big Data"){sessionStorage.setItem('Category','Big Data');}
    else if(value=="Angular"){sessionStorage.setItem('Category','Angular');}
    else{
      alert('Sorry!!No Such Category')
    }
    alert( sessionStorage.getItem('Category')+' Questions had been fetched in a while');
    this.router.navigateByUrl('/Category');
   }
   ngOnInit()
   {
     this.userEmail = sessionStorage.getItem('Email');
     this.userName = sessionStorage.getItem('Name');
    
     if(this.userEmail == null || this.userEmail == '')
     {

       document.getElementById("loginList")!.style.display = "flex";
       document.getElementById("logoutList")!.style.display = "none";
     
     }
     else
     {
    
       document.getElementById("loginList")!.style.display = "none";
       document.getElementById("logoutList")!.style.display = "flex";
       document.getElementById("username")!.innerHTML = this.userName;
     }
   
 }
  
}