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
  modalmessage='';
  hideText: boolean = false;
  modal:boolean=false;
  success:boolean=false
  count:number=255
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

  textInquiry(){
    this.hideText = true;
  }

  textOther(){
    this.hideText = false;
  }
  getdata(){
    console.log(this.data)
    if(this.data.POC == '' || this.data.email == '' ||this.data.email == ''){
      console.log('missing information')
      this.success = false
      this.modalmessage = "Please fill in Name, Email, and Inquiry";
      this.modal = true;
      setTimeout(() => {
        this.modal = false
      }, 3000);
    }else{
      let message = `
      ${this.data.POC} from ${this.data.CN} is requesting a return response to eamail ${this.data.email} regarding the following,
   
      "${this.data.notes}"
      
      `
      console.log(message);
      this.success = true
      this.modalmessage = "Thank you for your submission ";
      this.modal = true;
      setTimeout(() => {
        this.modal = false
      }, 3000);
      this.connector.sendemail(message)

    }

   

    
  }

  updatecount(){
    this.count = 255 - this.data.notes.length
  }

}
