import { Component, OnInit } from '@angular/core';
import{WebpateService} from "../../../services/webpate.service";
import {DomSanitizer} from "@angular/platform-browser"

import { Router , ActivatedRoute, ParamMap  } from "@angular/router";


@Component({
  selector: 'app-servicespage',
  templateUrl: './servicespage.component.html',
  styleUrls: ['./servicespage.component.css']
})
export class ServicespageComponent implements OnInit {

  constructor( private connector: WebpateService,
    private dom:DomSanitizer,private router:Router) { }
    html
    prev;
    prevName;
  ngOnInit() {
    this.prevName = localStorage.getItem("prev");
    this.prev = localStorage.getItem("prevRoute");
   
    setTimeout(() => {
      for(let v =1;v<5;v++){
        let css = `.learn${v}`
        document.querySelectorAll(css).forEach(elem=>{
          elem = elem as HTMLDivElement
          elem.addEventListener('click',()=>{
            this.routeme(v)
          })
        })
      }
      
    }, 500);

  }

  routeme(num){
    let routeurl = '';

    if(num ==1){
      routeurl='dt'
    }
    if(num == 2){
      routeurl='appm'
    }

    if(num ==3){
      routeurl='analytics'
    }

    if(num==4){
      routeurl='ess'
    }
    
    this.router.navigate([`/${routeurl}`])
  }

}
