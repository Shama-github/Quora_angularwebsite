import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

 
  constructor(private u:UserService,private router:Router) { }//DI

  onSubmit(data:any){
   //console.log(data);
  this.u.PostRegister(data).subscribe(e=>console.log(e),e=>alert('Successfully Registered'));
  this.router.navigateByUrl('/Login');
  }


 
  ngOnInit(): void {
  }

}
