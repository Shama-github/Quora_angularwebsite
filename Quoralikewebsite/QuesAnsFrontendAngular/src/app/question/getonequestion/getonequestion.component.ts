import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-getonequestion',
  templateUrl: './getonequestion.component.html',
  styleUrls: ['./getonequestion.component.css']
})
export class GetonequestionComponent implements OnInit {

 
 
  questions:any
   userEmail=sessionStorage.getItem('Email');
  
  constructor(private q:QuestionService,private router:Router) { 

    q.GetUserques(this.userEmail).subscribe((data) => {
      this.questions = data;
      console.log(data);
  });

  }
  ngOnInit() {
    this.userEmail = sessionStorage.getItem('Email');
    if(this.userEmail == null || this.userEmail == '')
    {
      alert('Login First.');
     this.router.navigateByUrl('/Login')
    }
  }
}
