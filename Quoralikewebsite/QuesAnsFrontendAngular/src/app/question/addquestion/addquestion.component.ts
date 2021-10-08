import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {

  constructor(private q:QuestionService, private router:Router) { }//DI
userEmail:any
 submitQuestion(questext:string,quescategory:string){
  let ques={ questionText: questext,questionCategory:quescategory,userEmail:sessionStorage.getItem('Email')};
  this.q.Post(ques).subscribe(e=>console.log(e),e=>alert('question added'));
  this.router.navigateByUrl('/Home');
  }

  ngOnInit(){
    this.userEmail = sessionStorage.getItem('Email');
    if(this.userEmail == null || this.userEmail == '')
    {
      alert('Login First.');
     this.router.navigateByUrl('/Login')
    }
  }

}
