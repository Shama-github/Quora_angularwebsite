import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-deletequestion',
  templateUrl: './deletequestion.component.html',
  styleUrls: ['./deletequestion.component.css']
})
export class DeletequestionComponent implements OnInit {


  ngOnInit(): void {
  }

  id:number;
  question:any;
  constructor(ar:ActivatedRoute,private router:Router, private a:QuestionService) {
    this.id=ar.snapshot.params.id;
    a.Getone(this.id).subscribe(e=>this.question=e);
   }

  onDelete()
 {
   this.a.Delete(this.id).subscribe(e=>alert('Deleted'));
   this.router.navigateByUrl('/Home');
 }
}
