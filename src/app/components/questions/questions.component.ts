import { Component, OnInit } from '@angular/core';
import{WebpateService} from "../../../services/webpate.service";
import { Router , ActivatedRoute, ParamMap  } from "@angular/router";
import {SearchJson} from '../../../modal/serach'

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private connector: WebpateService, private router:Router, private searchjson:SearchJson) { }

  searchtext;
  res;
  filteredArray=[];
   map={
    home:{name:'HOME PAGE',route:'home'},
    aboutus:{name:'ABOUT US',route:'aboutus'},
    solutions:{name:'SOLUTIONS PAGE',route:'solutions'},
    services:{name:'SERVICES PAGE',route:'services'},
    modernization:{name:'APPLICATION MODERNIZATION PAGE',route:'appm'},
    contractv:{name:'CONTRACT VEHICLES PAGE',route:'contractv'},
    contact:{name:'CONTACT PAGE',route:'contact'},
    careers:{name:'CAREERS PAGE',route:'careers'},
    digital:{name:'DIGITAL TRANSFORMATION PAGE',route:'digital'},
    enterprise:{name:'ENTERPRISE SUPPORT SERVICES PAGE',route:'enterprise'},
    analytics:{name:'DATA ANALYTICS PAGE',route:'analytics'}

  }
  prev;
  prevName;
ngOnInit() {
  this.prevName = localStorage.getItem("prev");
  this.prev = localStorage.getItem("prevRoute");

  }
  filtersearch(){
    console.log(this.searchtext,this.searchjson.searchindex);
    let keys = Object.keys(this.searchjson.searchindex);
    this.filteredArray = keys.filter(elem=>{
      if(this.searchjson.searchindex[elem].content.includes(elem)){
        return elem
      }
      
    })
    console.log(this.filteredArray)
  }

  convert(text){
    return this.map[text]
  }

  routeme(text){
    let routeurl =this.convert(text).route
    this.router.navigate([`/${routeurl}`])
  }



  // {path:'home',component:HomeComponent},
  // {path:'',component:HomeComponent}
  // , {path:'appm',component:AppmodernizationComponent},
  // {path:'dt',component:DigitTComponent},
  // {path:'aboutus',component:AboutusComponent},
  // {path:'services',component:ServicespageComponent},
  // {path:'contractv',component:ContractvComponent},
  // {path:'careers', component:CareersComponent},
  // {path:'contact',component:ContactComponent},
  // {path:'solutions',component:SolutionsComponent},
  // {path:'ess',component:EnterpriseSSComponent},
  // {path:'analytics',component:DataanalyticsComponent},
  // {path:'questions',component:QuestionsComponent}
}
