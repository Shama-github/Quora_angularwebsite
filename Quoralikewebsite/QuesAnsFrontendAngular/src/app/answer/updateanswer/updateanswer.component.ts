import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnswerService } from 'src/app/services/answer.service';

@Component({
  selector: 'app-updateanswer',
  templateUrl: './updateanswer.component.html',
  styleUrls: ['./updateanswer.component.css']
})
export class UpdateanswerComponent implements OnInit {

  answerrform:FormGroup;
  id:number;
  constructor(ar:ActivatedRoute, private router:Router,private a:AnswerService,fb:FormBuilder) {
    this.id=ar.snapshot.params.id;
    this.answerrform=fb.group({
      answerId:[],
      answerText:[],
      questionId:[],
      userEmail:[]
    });
    a.Getone(this.id).subscribe(c=>this.answerrform.setValue(c));
  }

  onSubmit(data:any){
    console.log(data);
    this.a.Put(this.id,data).subscribe((data) => {
      console.log(data);
      alert('Answer Updated.');
    },
    error => {
      console.log(error.error);
      alert('Error : ' + error.error);
    });
  }

  ngOnInit(): void {
  }

}
