import { Component, OnInit } from '@angular/core';
import{WebpateService} from "../../../services/webpate.service";
import {DomSanitizer} from "@angular/platform-browser"

@Component({
  selector: 'app-digit-t',
  templateUrl: './digit-t.component.html',
  styleUrls: ['./digit-t.component.css']
})
export class DigitTComponent implements OnInit {

  
  constructor( private connector: WebpateService,
    private dom:DomSanitizer) { }
    html
    prev;
    prevName;
  ngOnInit() {
    this.prevName = localStorage.getItem("prev");
    this.prev = localStorage.getItem("prevRoute");
    

  }


}
