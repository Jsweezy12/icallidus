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

  smoothscroll(top){
    window.scrollTo({top:top,behavior: 'smooth' });   
  }

  routeme(routeurl){
    this.smoothscroll(0)
    console.log('routeurl')
    this.router.navigate([`/${routeurl}`])
  }
  

}
