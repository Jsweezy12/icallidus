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
          } else {
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
  screenWidth:any
  screenHeight:any
  scale ='';
  scalen:number;
  scale2 = '';
  scrolled=false

  showmodalbtngroup;
  ngOnInit(){
    document.querySelector('body').style.overflowY = 'scroll'
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
   
      this.connector.allhtml.subscribe(res=>{
        console.log(res);
        setTimeout(() => {
          // this.navhtml=this.dom.bypassSecurityTrustHtml(res[0].htmlform);
          this.headerhtml= this.dom.bypassSecurityTrustHtml(res[0].htmlversion4);
          this.modalhtml= this.dom.bypassSecurityTrustHtml(res[0].htmlversion5);
          
        }, 500);

        setTimeout(() => {
     
        

          document.querySelector("#closemodal").addEventListener('click',()=>{
            this.showmodal = false
            document.querySelector('body').style.overflowY = 'scroll'
          });


        }, 1000);
        
      });

      window.addEventListener('scroll', (event)=>{
        this.scrollCapture(event)
      }, true)

  }


  smoothscroll(top:number){
    console.log('scroll called',top)
    setTimeout(() => {
      try{
        let p = top*this.scalen
        console.log('scroll adjustent',p);
        // document.querySelector('#mainwrapper').scrollTo(0,p);  
        window.scrollTo({top:p,behavior: 'smooth' });  
      }catch(e){
        console.log(e)
      }
    }, 100);
    
    

   
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
    
    let s = e.srcElement.scrollingElement.scrollTop;
    let delta = s- this.scrollast;
    this.scrollast =s;
    console.log(s,this.scrollast,delta);

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
          let c_s_top = s_image.offsetTop;
          let c_j_top = j_image.offsetTop;
          //Move picture based upon view width
          if(this.screenWidth >905){
            if(s > (2660*this.scalen)){
            
              if(delta>0){
                if(c_s_top>3806){
                 
                s_image.style.top = `${(c_s_top-(10))}px`;
                j_image.style.top = `${(c_j_top-(10))}px`
                }
              }else{
                if(c_s_top<3836){
                  s_image.style.top = `${(c_s_top+(10))}px`;
                  j_image.style.top = `${(c_j_top+(10))}px`
                }
               
              }
                
            
            
          }
          }else{

          }
          
        }
        
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
          if(s <(this.scalen * 2000.306640625) ){
            returnall(5);
           
          }
          if(this.approute =='solutions'){
        }
       



        function returnall(p){
          for(var i= 1; i <5;i++){
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
      this.scale= `scale(${this.screenWidth/450})`
      this.scalen= this.screenWidth/450;
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
  console.log('routeurl')
  this.router.navigate([`/${routeurl}`])
}




}
