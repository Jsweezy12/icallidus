import { Component, OnInit } from '@angular/core';
import{WebpateService} from "../../../services/webpate.service";
import {DomSanitizer} from "@angular/platform-browser"

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor( private connector: WebpateService,
    private dom:DomSanitizer) { }
    html
    mhtml
  ngOnInit() {
    this.connector.allhtml.subscribe(res=>{
      console.log(res);
      setTimeout(() => {
        this.html=this.dom.bypassSecurityTrustHtml(res[0].htmlversion3)
        this.mhtml=this.dom.bypassSecurityTrustHtml(res[0].htmlversion18)
      }, 500);
      
    });

  }

}
