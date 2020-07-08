import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute, ParamMap  } from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
    setTimeout(() => {
           
      document.querySelector("#aboutus").addEventListener('click',()=>{
        this.smoothscroll(0)
        this.routeme('aboutus')
      });
      
    }, 200);
  }

  smoothscroll(p){
    console.log('scroll called from footerpage')
    try{
      // window.scrollTo({top:p,behavior: 'smooth' }); 
      document.querySelector("#mainwrapper").scrollTo(0,0) 
    }catch(e){
      console.log(e)
    }
  }

  routeme(routeurl){ 
    console.log('routeurl')
    this.router.navigate([`/${routeurl}`])
    
      this.smoothscroll(0)
   
    
  }
  

}
