import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders}from "@angular/common/http";
import {environment} from '../environments/environment'
import { Observable ,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebpateService {
 
  constructor(private http:HttpClient) { }
  APIURL=environment.URL;
   allhtml= new BehaviorSubject({})
  getuibyName(name){
    let data ={
      AIname:name
    }
    this.http.post(`${this.APIURL}/getAIByNameWeb/{AIname}`,data).subscribe(res =>{
      this.allhtml.next(res);
      console.log('ALL Page Data',this.allhtml)
    })
  }

  getuibyName2(name){
    let data ={
      AIname:name
    }
   return  this.http.post(`${this.APIURL}/getAIbyName/{AIname}`,data)
  }

  sendemail(text){
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'https://icallidus.com');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With');
    headers.append('Access-Control-Allow-Credentials', 'true');


   let data={
      text:text
    }

    
    this.http.post(`https://icallidus.com/mail.php`,JSON.stringify(data)).subscribe(res=>{
      console.log(res)
    })
  }

}
