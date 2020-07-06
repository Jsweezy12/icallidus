import { Injectable } from '@angular/core';
import{HttpClient}from "@angular/common/http";
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
    this.http.post(`${this.APIURL}/getAIbyName/{AIname}`,data).subscribe(res =>{
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

}
