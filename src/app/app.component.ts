import { Component, OnInit, HostListener } from '@angular/core';
import { Event as NavigationEvent } from "@angular/router";
import { filter } from "rxjs/operators";
import { NavigationStart } from "@angular/router";
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
  
	// I initialize the app component.
  constructor( private router: Router, private connector: WebpateService,
    private dom:DomSanitizer) {
 
		router.events
			.pipe(
				// The "events" stream contains all the navigation events. For this demo,
				// though, we only care about the NavigationStart event as it contains
				// information about what initiated the navigation sequence.
				filter(
					( event: NavigationEvent ) => {
 
						return( event instanceof NavigationStart );
 
					}
				)
			)
			.subscribe(
				( event: NavigationStart ) => {
 
					console.group( "NavigationStart Event" );
					// Every navigation sequence is given a unique ID. Even "popstate"
					// navigations are really just "roll forward" navigations that get
					// a new, unique ID.
					console.log( "navigation id:", event.id );
					console.log( "route:", event.url );
					// The "navigationTrigger" will be one of:
					// --
					// - imperative (ie, user clicked a link).
					// - popstate (ie, browser controlled change such as Back button).
					// - hashchange
					// --
					// NOTE: I am not sure what triggers the "hashchange" type.
					console.log( "trigger:", event.navigationTrigger );
 
					// This "restoredState" property is defined when the navigation
					// event is triggered by a "popstate" event (ex, back / forward
					// buttons). It will contain the ID of the earlier navigation event
					// to which the browser is returning.
					// --
					// CAUTION: This ID may not be part of the current page rendering.
					// This value is pulled out of the browser; and, may exist across
					// page refreshes.
					if ( event.restoredState ) {
 
						console.warn(
							"restoring navigation id:",
							event.restoredState.navigationId
						);
 
					}
 
					console.groupEnd();
 
				}
			)
		;
 
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
  scale2 = '';
  scrolled=false

  showmodalbtngroup;
  ngOnInit(){
    document.querySelector('body').style.overflowY = 'scroll'
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    console.log('screen size oninit',this.screenWidth,this.screenHeight)
    setTimeout(() => {
      this.SF();
    }, 200);

    window.onscroll = (e)=>{
      let s = window.pageYOffset;
      if(s > 50){
        this.scrolled = true
      }else{
        this.scrolled= false
      }
   
    }
    
    this.connector.getuibyName('ICALLIS');
    

    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      // Get the Screen Size
      this.screenWidth = evt.currentTarget['innerWidth'];
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

  }



  smoothscroll(top){
    window.scrollTo({top:top,behavior: 'smooth' });  

    // document.querySelector('#container').scrollTo({top:top,behavior: 'smooth' });  
}

  ngOnChanges(){
    console.log('change')
  }

  SF(){
    console.log('I have ran')
    if(this.screenWidth < 905){
      this.scale= `scale(${this.screenWidth/900})`
    }else{
      this.scale= `scale(${this.screenWidth/1920})`
    }
    
    console.log('scale', this.scale)
    this.scale2=`scale(${(this.screenWidth)/1918})`
  }

  
  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe()
}

routeme(routeurl){
  
  this.smoothscroll(0)
  console.log('routeurl')
  this.router.navigate([`/${routeurl}`])
}




}
