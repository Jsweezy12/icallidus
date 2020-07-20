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
    mhtml;
    prev;
    prevName;
  ngOnInit() {
    this.prevName = localStorage.getItem("prev");
    this.prev = localStorage.getItem("prevRoute");
    console.log("Getting Previous",this.prevName, this.prev);
   

  }

}
