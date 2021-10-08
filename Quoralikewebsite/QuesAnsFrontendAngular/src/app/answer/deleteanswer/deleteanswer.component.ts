import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnswerService } from 'src/app/services/answer.service';

@Component({
  selector: 'app-deleteanswer',
  templateUrl: './deleteanswer.component.html',
  styleUrls: ['./deleteanswer.component.css']
})
export class DeleteanswerComponent implements OnInit {

  id:number;
  answer:any;
  constructor(ar:ActivatedRoute, private router:Router,private a:AnswerService) {
    this.id=ar.snapshot.params.id;
    a.Getone(this.id).subscribe(e=>this.answer=e);
   }

  onDelete()
 {
   this.a.Delete(this.id).subscribe((data) => {
    console.log(data);
    alert('Answer Deleted.');
    this.router.navigateByUrl('/Home');
  },
  error => {
    console.log(error.error);
    alert('Error : ' + error.error);
  });
 }

  ngOnInit(): void {
  }

}
