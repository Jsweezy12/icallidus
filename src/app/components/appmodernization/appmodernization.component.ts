import { Component, OnInit } from '@angular/core';
import{WebpateService} from "../../../services/webpate.service";
import {DomSanitizer} from "@angular/platform-browser"

@Component({
  selector: 'app-appmodernization',
  templateUrl: './appmodernization.component.html',
  styleUrls: ['./appmodernization.component.css']
})
export class AppmodernizationComponent implements OnInit {
  
  constructor( private connector: WebpateService,
    private dom:DomSanitizer) { }
    html
    html2
    prev;
    prevName;
  ngOnInit() {
    this.prevName = localStorage.getItem("prev");
    this.prev = localStorage.getItem("prevRoute");
    // this.connector.allhtml.subscribe(res=>{
    //   console.log(res);
    //   setTimeout(() => {
    //     this.html=this.dom.bypassSecurityTrustHtml(res[0].htmlversion11)
    //     this.html2=this.dom.bypassSecurityTrustHtml(res[0].htmlversion19)
    //   }, 500);
      
    // });

  }

}
