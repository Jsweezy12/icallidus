import { Component, OnInit } from '@angular/core';
import{WebpateService} from "../../../services/webpate.service";
import { Router , ActivatedRoute, ParamMap  } from "@angular/router";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private connector: WebpateService, private router:Router) { }

  searchtext;
  res;
  filteredArray=[];
   map={
    htmlversion2:{name:'HOME PAGE',route:'home'},
    htmlversion3:{name:'ABOUT US',route:'aboutus'},
    htmlversion6:{name:'SOLUTIONS PAGE',route:'solutions'},
    htmlversion7:{name:'SERVICES PAGE',route:'services'},
    htmlversion11:{name:'APPLICATION MODERNIZATION PAGE',route:'appm'},
    htmlversion12:{name:'CONTRACT VEHICLES PAGE',route:'contractv'},
    htmlversion13:{name:'CONTACT PAGE',route:'contact'},
    htmlversion14:{name:'CAREERS PAGE',route:'careers'},
    htmlversion15:{name:'DIGITAL TRANSFORMATION PAGE',route:'dt'},
    htmlversion16:{name:'ENTERPRISE SUPPORT SERVICES PAGE',route:'ess'},
    htmlversion17:{name:'DATA ANALYTICS PAGE',route:'analytics'}

  }
  prev;
  prevName;
ngOnInit() {
  this.prevName = localStorage.getItem("prev");
  this.prev = localStorage.getItem("prevRoute");
    this.connector.allhtml.subscribe(res=>{
      console.log(res);
      setTimeout(() => {
        this.res=res[0];
        delete this.res.functions
      }, 500);
      
    });
  }
  filtersearch(){
    console.log(this.searchtext,this.res);
    let keys = Object.keys(this.res);
    let filtkeys = Object.keys(this.map);
    this.filteredArray = keys.filter(elem=>{
      if(filtkeys.includes(elem)){
        return this.res[elem].includes(this.searchtext)
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
