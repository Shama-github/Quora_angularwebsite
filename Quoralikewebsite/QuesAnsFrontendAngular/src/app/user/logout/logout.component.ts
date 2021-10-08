import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  user:any
  useremail:any
  constructor(u:UserService,private router:Router) { 
    this.useremail=sessionStorage.getItem('Email');
    u.Getone(this.useremail).subscribe((data) => {
      this.user = data;
      console.log(data);
  
  });
  }
logout()
{
  sessionStorage.removeItem('Email');
  alert('Logged out successfully');
  this.router.navigateByUrl('/Home');
}
  

  ngOnInit(): void {
  }

}
