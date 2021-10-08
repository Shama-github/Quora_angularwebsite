import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnswerService } from '../services/answer.service';
import { QuestionService } from '../services/question.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 questions:any
 ans:any
 userEmail:any
 userName:any
 questionId:any
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
  constructor(ar:ActivatedRoute,q:QuestionService, private router:Router,private a:AnswerService) { 
    q.Getall().subscribe((data) => {
      this.questions = data;
      console.log(data);
  });
  }
  
  submitAnswer(id:number,answer:string){
    console.log(id +' '+ answer + ' ' + this.userEmail);
    this.questionId = id;
    let ans={ answerText: answer,questionId:id,userEmail:sessionStorage.getItem('Email')};

    if(this.userEmail == null || this.userEmail == '')
    {
      alert('Login First.');
    }
    else if(answer == null || answer == '')
    {
      alert('Answer should not be empty.');
    }
    else
    {
    this.a.Post(ans).subscribe((data) => {
      console.log(data);
      alert('Successfully Submitted Your Answer');
      this.router.navigateByUrl('/myquestions');
    },
    error => {
      console.log(error.error);
      alert('Error : ' + error.error);
     }
    );
}
}
}
