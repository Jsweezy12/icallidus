import { Component, OnInit } from '@angular/core';
import{WebpateService} from "../../../services/webpate.service";
import {DomSanitizer} from "@angular/platform-browser"

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private connector: WebpateService,private dom:DomSanitizer) { }
  res;
  html;
  ngOnInit() {

     this.connector.allhtml.subscribe(res=>{
      this.res = res
      this.html=this.dom.bypassSecurityTrustHtml(res[0].htmlversion20)
    });
    setTimeout(() => {
      document.querySelector('#send').addEventListener('click',()=>{
        this.getdata();
         
       })
    }, 500);
    
  }

  getdata(){
    let r = new Function(this.res[0].functions.getFormData.arguments,this.res[0].functions.getFormData.functionbody);
    let data = r();
    let message = `
    ${data.POC} from ${data.CN} is requesting a return response to eamail ${data.email} regarding the following,
 
    "${data.notes}"
    
    `
    console.log(message)

    this.connector.sendemail(message)
  }

}
