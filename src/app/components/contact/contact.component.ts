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
  prev;
  prevName;
  data={CN: "",
  POC: "",
  email: "",
  notes: ""}
ngOnInit() {
  this.prevName = localStorage.getItem("prev");
  this.prev = localStorage.getItem("prevRoute");
    setTimeout(() => {
      document.querySelectorAll('#send').forEach(elem=>{
        elem = elem as HTMLDivElement;
        elem.addEventListener('click',()=>{
          this.getdata();
         })
      })
    }, 500);
    
    
  }

  getdata(){
    console.log(this.data)
    let message = `
    ${this.data.POC} from ${this.data.CN} is requesting a return response to eamail ${this.data.email} regarding the following,
 
    "${this.data.notes}"
    
    `
    console.log(message)

    // this.connector.sendemail(message)
  }

}
