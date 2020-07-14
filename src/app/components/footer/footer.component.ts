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
    console.log('scroll called from footerpage')
    try{
      let p = pi
      console.log('scroll adjustent',p);
      document.querySelector("#mainwrapper").scrollTo(0,p) 
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
