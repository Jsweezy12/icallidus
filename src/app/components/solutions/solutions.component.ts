import { Component, OnInit } from '@angular/core';
import{WebpateService} from "../../../services/webpate.service";
import {DomSanitizer} from "@angular/platform-browser"
@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {

  
  constructor( private connector: WebpateService,
    private dom:DomSanitizer) { 
      this.connector.allhtml.subscribe(res=>{
        console.log(res);
        setTimeout(() => {
          this.html=this.dom.bypassSecurityTrustHtml(res[0].htmlversion6);
          //hoverover effects
          setTimeout(() => {

            for( var i=1;i<5;i++){
             let box_1 =document.querySelector(`.box${i}`) as HTMLDivElement;
              let box_i =  document.querySelector(`.boxi${i}`) as HTMLDivElement;
              let box_t =  document.querySelector(`.boxt${i}`) as HTMLDivElement;
              box_1.addEventListener('mouseover',()=>{
                box_i.style.marginTop= '-100px';
                box_t.style.opacity= '1';
      
              })
      
              box_t.addEventListener('mouseover',()=>{
                box_i.style.marginTop= '-100px';
                box_t.style.opacity= '1';
      
              })
      
              box_i.addEventListener('mouseover',()=>{
                box_i.style.marginTop= '-100px';
                box_t.style.opacity= '1';
      
              })
              box_1.addEventListener('mouseout',()=>{
                box_i.style.marginTop= '0px';
                box_t.style.opacity= '0';
              })
      
            }
            
      
      
          }, 500);
         
  
  
        }, 500);
        
      });
    }
    html
  ngOnInit() {
   

  }

  

}
