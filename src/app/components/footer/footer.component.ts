import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute, ParamMap  } from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router,) { }

  routename;
  ngOnInit() {
  //script to get courrent route
  this.routename =  this.router.url;
  console.log(this.routename)


  }
 

 

  smoothscroll(pi){
    console.log('scroll called from footerpage');
     let el =document.querySelector("#mainwrapper") as HTMLDivElement;
     el.style.minHeight="1500px"
    try{
     
        let p = pi
        console.log('scroll adjustent',p);
        setTimeout(() => {
          // document.querySelector("#mainwrapper").scrollTo(0,p);
          window.scrollTo({top:p,behavior: 'smooth' });
        }, 500);
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
