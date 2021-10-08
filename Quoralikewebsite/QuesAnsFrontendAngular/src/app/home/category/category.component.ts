import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswerService } from 'src/app/services/answer.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {
  questions:any
  questionId:any
  ans:any
  category:any
  userEmail:any
  m:any=sessionStorage.getItem('Category');
   constructor(q:QuestionService, private a:AnswerService,private router:Router) { 
     this.category=sessionStorage.getItem('Category');
     q.GetCategoryques(this.category).subscribe((data) => {
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

  ngOnInit(): void {
  }

}
