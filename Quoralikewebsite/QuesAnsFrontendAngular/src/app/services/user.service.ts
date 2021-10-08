import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiurl='https://localhost:44358';
  constructor( private http:HttpClient) { }//DI
  Getall()
  { 
    return this.http.get(this.apiurl+'/getAllUsers');
  }
  Getone(useremail:any){
    return this.http.get(this.apiurl+'/getUserByEmail/'+useremail);
  }
  PostRegister(user:any)
  {
    return this.http.post(this.apiurl+'/registerUser',user);
 
  }
  Postlogin(user:any)
  {
    return this.http.post(this.apiurl+'/loginUser',user);
 
  }

  Put(id:string,user:any){
    return this.http.put(this.apiurl+'/updateUser/'+id,user);
  }

  Delete(useremail:string){
    return this.http.delete(this.apiurl+'/deleteUser/'+useremail);
  }
}
