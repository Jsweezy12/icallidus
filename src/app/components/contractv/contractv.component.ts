import { Component, OnInit } from '@angular/core';
import{WebpateService} from "../../../services/webpate.service";
import {DomSanitizer} from "@angular/platform-browser"

@Component({
  selector: 'app-contractv',
  templateUrl: './contractv.component.html',
  styleUrls: ['./contractv.component.css']
})
export class ContractvComponent implements OnInit {

 
  constructor( private connector: WebpateService,
    private dom:DomSanitizer) { }
    html
  ngOnInit() {
    this.connector.allhtml.subscribe(res=>{
      console.log(res);
      setTimeout(() => {
        this.html=this.dom.bypassSecurityTrustHtml(res[0].htmlversion12)
      }, 500);
      
    });

  }

}
