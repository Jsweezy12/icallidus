import { Component, OnInit,HostListener } from '@angular/core';
import{WebpateService} from "../../../services/webpate.service";
import {DomSanitizer} from "@angular/platform-browser"
import { fromEvent, Observable, Subscription } from "rxjs";
import{Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private connector: WebpateService,
    private dom:DomSanitizer,private router:Router) { }
    html
    html2    
  ngOnInit() {
  
      setTimeout(() => {

        document.querySelectorAll('.learn1').forEach(elem=>{
          let e = elem as HTMLDivElement;
          e.addEventListener('click',()=>{
            this.routeme('dt')
          })
        }
        
        )

        document.querySelectorAll('.learn2').forEach(elem=>{
          let e = elem as HTMLDivElement;
          e.addEventListener('click',()=>{
            this.routeme('appm')
          })
        }
        
        )

        document.querySelectorAll('.learn3').forEach(elem=>{
          let e = elem as HTMLDivElement;
          e.addEventListener('click',()=>{
            this.routeme('analytics')
          })
        }
        
        )

        document.querySelectorAll('.learn4').forEach(elem=>{
          let e = elem as HTMLDivElement;
          e.addEventListener('click',()=>{
            this.routeme('ess')
          })
        }
        
        )

        document.querySelectorAll('.career').forEach(elem=>{
          let e = elem as HTMLDivElement;
          e.addEventListener('click',()=>{
            this.routeme('careers')
          })
        }
        
        )
      }, 500);
      
 

  }

  routeme(routeurl){ 
    console.log('routeurl')
    this.router.navigate([`/${routeurl}`]);
  }

}
