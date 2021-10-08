import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  apiurl='https://localhost:44358';
  constructor( private http:HttpClient) { }//DI
  Getall()
  { 
    return this.http.get(this.apiurl+'/getAllAnswers');
  }
  Getone(id:number){
    return this.http.get(this.apiurl+'/getAnswersById/'+id);
  }
  GetUserans(useremail:string)
  {
    return this.http.get(this.apiurl+'/getAnswersByUser/'+useremail);
  }
  Post(ans:any)
  {
    return this.http.post(this.apiurl+'/createAnswer',ans);
 
  }

  Put(id:number,ans:any){
    return this.http.put(this.apiurl+'/updateAnswer/'+id,ans);
  }

  Delete(id:number){
    return this.http.delete(this.apiurl+'/deleteAnswer/'+id);
  }
}
