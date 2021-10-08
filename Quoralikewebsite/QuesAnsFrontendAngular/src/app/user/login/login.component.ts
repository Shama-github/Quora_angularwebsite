import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

m:any
userdata:any

  constructor(private u:UserService,private router:Router) { }//DI
  
  onSubmit(email:string,password:string){
  let user={userEmail:email,userName:'a',userPassword:password}
  this.u.Postlogin(user).subscribe((data) => {
    this.userdata = data;
    console.log(data);
    alert('Logged In Successfully');
        sessionStorage.setItem('Email', this.userdata.userEmail);
        sessionStorage.setItem('Name', this.userdata.userName);
       this.router.navigateByUrl('/Home');
    });

  }


  ngOnInit(): void {
  }

}
