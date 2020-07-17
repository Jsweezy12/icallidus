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
    html;
    selected="gsa1"
    prev;
    prevName;
  ngOnInit() {
    this.prevName = localStorage.getItem("prev");
    this.prev = localStorage.getItem("prevRoute");
    this.connector.allhtml.subscribe(res=>{
      console.log(res);
      setTimeout(() => {
        new Promise((reslove,reject)=>{
          try{
            this.html=this.dom.bypassSecurityTrustHtml(res[0].htmlversion12);
          }catch(e){
            console.log(e)
          }
          
          return reslove('done')

        }).then((r)=>{
          console.log('afterran',r);
            
          console.log('ran')
          setTimeout(() => {
            for(let v=1;v<5;v++){
              let buttons = document.querySelectorAll(`.gsa${v}`);
              console.log(buttons)
              let id = `gsa${v}`
              buttons.forEach(button=>{
              button.addEventListener('click',()=>{
                this.selected = id;
                console.log(this.selected)
              })
          }) 
            }
           
          }, 500);
          
          
        })
        
      }, 500);

      
      
    });

  }

}
