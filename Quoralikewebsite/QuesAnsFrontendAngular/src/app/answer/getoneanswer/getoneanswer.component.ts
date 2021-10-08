import { Component, NgZone, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AnswerService } from 'src/app/services/answer.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-getoneanswer',
  templateUrl: './getoneanswer.component.html',
  styleUrls: ['./getoneanswer.component.css']
})
export class GetoneanswerComponent implements OnInit {
  constructor(private a:AnswerService,private router:Router, private q:QuestionService,private zone:NgZone) { }

  
  userEmail:any
  questionList:any
  answerList:any

  ngOnInit() {
    this.userEmail = sessionStorage.getItem('Email');
    this.getUserAnswers();
      if(this.userEmail == null || this.userEmail == '')
      {
        alert('Login First.');
       this.router.navigateByUrl('/Login')
      }
    
  }

  public getUserAnswers()
  {
    this.q.Getall().subscribe((data) => {
      this.questionList = data;
      console.log(this.questionList)
      this.a.GetUserans(this.userEmail).subscribe((data) => {
        this.answerList = data;
        console.log(this.answerList)
      });

    });
  }
}
