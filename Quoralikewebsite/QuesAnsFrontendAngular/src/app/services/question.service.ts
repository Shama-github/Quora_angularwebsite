import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { QueryFlags } from '@angular/compiler/src/render3/view/compiler';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  apiurl='https://localhost:44358';
  constructor( private http:HttpClient) { }//DI
  Getall()
  { 
    return this.http.get(this.apiurl+'/getAllQuestions');
  }
  Getone(id:number){
    return this.http.get(this.apiurl+'/getQuestionById/'+id);
  }
  GetCategoryques(category:any)
  {
    return this.http.get(this.apiurl+'/getQuestionsByCategory/'+category);
  }
  GetUserques(useremail:any)
  {
    return this.http.get(this.apiurl+'/getQuestionsByUser/'+useremail);
  }
  Post(ques:any)
  {
    return this.http.post(this.apiurl+'/createQuestion',ques);
 
  }
  
 // Put(id:number,ques:any){return this.http.put(this.apiurl+'/updateQuestion/'+id,ques);}

  Delete(id:number){
    return this.http.delete(this.apiurl+'/deleteQuestion/'+id);
  }
}
