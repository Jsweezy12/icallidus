import { Component, OnInit,HostListener } from '@angular/core';
import{WebpateService} from "../../../services/webpate.service";
import {DomSanitizer} from "@angular/platform-browser"
import { fromEvent, Observable, Subscription } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private connector: WebpateService,
    private dom:DomSanitizer) { }
    html
    html2    
  ngOnInit() {
    this.connector.allhtml.subscribe(res=>{
      console.log(res);
      setTimeout(() => {
        this.html=this.dom.bypassSecurityTrustHtml(res[0].htmlversion2)
      }, 500);
      
    });

  }


}
