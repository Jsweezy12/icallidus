import { Component, OnInit } from '@angular/core';
import{WebpateService} from "../../../services/webpate.service";
import {DomSanitizer} from "@angular/platform-browser"


@Component({
  selector: 'app-servicespage',
  templateUrl: './servicespage.component.html',
  styleUrls: ['./servicespage.component.css']
})
export class ServicespageComponent implements OnInit {

  constructor( private connector: WebpateService,
    private dom:DomSanitizer) { }
    html
    prev;
    prevName;
  ngOnInit() {
    this.prevName = localStorage.getItem("prev");
    this.prev = localStorage.getItem("prevRoute");
    this.connector.allhtml.subscribe(res=>{
      console.log(res);
      setTimeout(() => {
        this.html=this.dom.bypassSecurityTrustHtml(res[0].htmlversion7)
      }, 500);
      
    });

  }

}
