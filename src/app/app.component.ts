import { Component, OnInit, HostListener } from '@angular/core';
import { Event as NavigationEvent } from "@angular/router";
import { filter } from "rxjs/operators";
import { NavigationStart, NavigationEnd } from "@angular/router";
import { Router , ActivatedRoute, ParamMap  } from "@angular/router";
import{WebpateService} from "../services/webpate.service";
import {DomSanitizer} from "@angular/platform-browser"
import { fromEvent, Observable, Subscription } from "rxjs";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'icallius';
  resizeObservable$: Observable<Event>
resizeSubscription$: Subscription
previousUrl;
presentUrl;
rotate=0

approute;

	// I initialize the app component.
  constructor( private router: Router, private connector: WebpateService,
    private dom:DomSanitizer) {
 
      router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if(this.previousUrl != undefined){
         // console.log('prev:', this.previousUrl.replace('/',''));
          localStorage.setItem("prevRoute",this.previousUrl);
          if(this.previousUrl == '/appm') {
            localStorage.setItem("prev","Application Modernization");
          } else if (this.previousUrl == '/dt') {
            localStorage.setItem("prev","Digital Transformation");
          } else if (this.previousUrl == '/aboutus') {
            localStorage.setItem("prev","AboutUs");
          } else if (this.previousUrl == '/contractv') {
            localStorage.setItem("prev","Contract Vehicles");
          } else if (this.previousUrl == '/ess') {
            localStorage.setItem("prev","Enterprise Support Services");
          } else if (this.previousUrl == '/home') {
            localStorage.setItem("prev","");
          }  else if (this.previousUrl == '/careers') {
            localStorage.setItem("prev","careers");
          }
          else {
            localStorage.setItem("prev",this.jsUcfirst(this.previousUrl.replace('/','')));
          }
        } else if (this.previousUrl == undefined){
          localStorage.setItem("prev","");
        }
        this.presentUrl =  event.url;
        this.previousUrl = event.url;
        if(this.presentUrl != undefined) {
        //  console.log('current:', this.presentUrl.replace('/',''));
          localStorage.setItem("currentRoute",this.presentUrl.replace('/',''));
          
        //  localStorage.setItem("current",this.jsUcfirst(this.presentUrl.replace('/','')));
        }
      });
		// router.events
		// 	.pipe(
		// 		// The "events" stream contains all the navigation events. For this demo,
		// 		// though, we only care about the NavigationStart event as it contains
		// 		// information about what initiated the navigation sequence.
		// 		filter(
		// 			( event: NavigationEvent ) => {
 
		// 				return( event instanceof NavigationStart );
 
		// 			}
		// 		)
		// 	)
		// 	.subscribe(
		// 		( event: NavigationStart ) => {
 
		// 			console.group( "NavigationStart Event" );
		// 			// Every navigation sequence is given a unique ID. Even "popstate"
		// 			// navigations are really just "roll forward" navigations that get
		// 			// a new, unique ID.
		// 			console.log( "navigation id:", event.id );
    //       console.log( "route:", event.url );
    //       this.approute = event.url;
		// 			// The "navigationTrigger" will be one of:
		// 			// --
		// 			// - imperative (ie, user clicked a link).
		// 			// - popstate (ie, browser controlled change such as Back button).
		// 			// - hashchange
		// 			// --
		// 			// NOTE: I am not sure what triggers the "hashchange" type.
		// 			console.log( "trigger:", event.navigationTrigger );
 
		// 			// This "restoredState" property is defined when the navigation
		// 			// event is triggered by a "popstate" event (ex, back / forward
		// 			// buttons). It will contain the ID of the earlier navigation event
		// 			// to which the browser is returning.
		// 			// --
		// 			// CAUTION: This ID may not be part of the current page rendering.
		// 			// This value is pulled out of the browser; and, may exist across
		// 			// page refreshes.
		// 			if ( event.restoredState ) {
 
		// 				console.warn(
		// 					"restoring navigation id:",
		// 					event.restoredState.navigationId
		// 				);
 
		// 			}
 
		// 			console.groupEnd();
 
		// 		}
		// 	)
		// ;
 
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    event.target.innerWidth;
  }


  navhtml
  headerhtml
  modalhtml
  showmodal:boolean=false
  showTalent:boolean=false;
  screenWidth:any
  screenHeight:any
  scale ='';
  scalen:number;
  scale2 = '';
  scrolled=false

  showmodalbtngroup;
  ngOnInit(){
    this.screenWidth = document.querySelector('body').clientWidth;
    this.screenHeight = window.innerHeight;
    console.log('screen size oninit',this.screenWidth,this.screenHeight);
    this.SF();
    this.connector.getuibyName('ICALLIS');
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      // Get the Screen Size/ this.screenWidth = evt.currentTarget['innerWidth'];
      this.screenWidth = document.querySelector('body').clientWidth;
        this.SF(); 
    })
    
   

  }


  smoothscroll(top:number){
    console.log('scroll called',top)
    setTimeout(() => {
      try{
        let p = top*this.scalen
        console.log('scroll adjustent',p);
        let el =document.querySelector("#mainwrapper") as HTMLDivElement;
        el.style.minHeight="unset"
        el.scrollTo(0,p); 
        
         
      }catch(e){
        console.log(e)
      }
    }, 1500);
    
    

   
}

  ngOnChanges(){
    console.log('change')
  }

  jsUcfirst(string) 
  {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  scrollast=0;
  scrollCapture(e){
    // console.log(e)
    
    let s =  e.target.scrollTop 
    let delta = s- this.scrollast;
    this.scrollast =s;
    console.log(s,this.scrollast,delta);

     //Script to show the Join Talent Pool Bar
     console.log(localStorage.getItem("currentRoute"))
     if(localStorage.getItem("currentRoute") === 'careers'){
       
        if(s < 100){
          this.showTalent = false
        }
        if(s > 800 * this.scalen){
          this.showTalent = true
        }

        if(s > 1800 * this.scalen){
          this.showTalent = false
        }
        
      
     }
    
    if(document.querySelector('#mainpic')){
      if(s > 50){
        this.scrolled = true
      }else{
        this.scrolled= false;
        (<HTMLDivElement>document.querySelector('#mainpic')).style.top = `${0-1.5*s}px`
  
      }
  
      
        //Script to chagne the main picture views
        if(document.querySelector('.successstoryimage')){
          let s_image = document.querySelector('.successstoryimage') as HTMLDivElement;
          let j_image = document.querySelector('.jointeamimage') as HTMLDivElement;
          console.log(s_image.offsetTop)
          let c_s_top = s_image.offsetTop;
          let c_j_top = j_image.offsetTop;

          let max = 4389
          let min = 4400
          //Move picture based upon view width
          if(this.screenWidth > 905){
            if(s > (2860*this.scalen)){
            
              if(delta>0){
                if(c_s_top > max){
                  s_image.style.top = `${(c_s_top-(5))}px`;
                  j_image.style.top = `${(c_j_top-(5))}px`;
                
                }
              }else{
                if(c_s_top < min){
                  console.log('negative')
                  s_image.style.top = `${(c_s_top+(5))}px`;
                  j_image.style.top = `${(c_j_top+(5))}px`
                }
               
              }
                
            
            
          }
          }else{

          }
          
        }
        
    }

    if(document.querySelector('.gear1')){
      if(delta > 0){
        this.rotate +=1;
     
      }else{
        this.rotate -=1;
      }

      (<HTMLDivElement>document.querySelector('.gear1')).style.transform=`rotate(${this.rotate}deg)`;
      (<HTMLDivElement>document.querySelector('.gear2')).style.transform=`rotate(-${this.rotate}deg)`;
      (<HTMLDivElement>document.querySelector('.gear3')).style.transform=`rotate(-${this.rotate}deg)`;
      
    }

   
        
          if(s > (this.scalen * 2000.306640625)){
            activatemove(1)
           
          }
  
          if(s > (this.scalen * 2500.306640625)){
            activatemove(2)
            
           }
  
           if(s > (this.scalen * 3000.306640625)){
            activatemove(3)
            
           }
  
           if(s > (this.scalen * 3500.306640625)){
            activatemove(4)
            
           }

           if(s > (this.scalen * 4000.306640625)){
            activatemove(5)
            
           }

           if(s > (this.scalen * 4500.306640625)){
            activatemove(6)
            
           }



          if(s <(this.scalen * 2000.306640625) ){
            returnall(7);
           
          }
          if(this.approute =='solutions'){
        }
       



        function returnall(p){
          for(var i= 1; i <7;i++){
            if(i != p){
            try{
              let box_i =  document.querySelectorAll(`.boxi${i}`)[1] as HTMLDivElement;
            let box_t =  document.querySelectorAll(`.boxt${i}`)[1] as HTMLDivElement;
            box_i.style.marginTop= '0px';
            box_t.style.opacity= '0';
            }catch(e){

            }  
            
            }
            
          }
        }

        function activatemove(i){

          try{
            let box_1 =document.querySelectorAll(`.box${i}`)[1] as HTMLDivElement;
            console.log(box_1)
            box_1.click();
          }catch(e){}
          
        }

 
   
  

     
 
  
  }
  
  SF(){
    if(this.screenWidth < 905){
      this.scale= `scale(${this.screenWidth/464})`
      this.scalen= this.screenWidth/464;
    }else{
      this.scale= `scale(${this.screenWidth/1920})`
      this.scalen= this.screenWidth/1920;
    }

    let w = this.screenWidth/1918 
    if(w > 0.4){
      this.scale2=`scale(${(this.screenWidth)/1918})`
    }else{
      this.scale2 = 'scale(0.4)'
    }
    
    console.log('scale', this.scale)
    
  }

  
  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe();
    this.screenWidth=0
    this.screenHeight=0;
    this.scale=''
}

routeme(routeurl){
  console.log('routeurl',routeurl)
  this.router.navigate([`/${routeurl}`]);
  this.showmodal = false
}




}
