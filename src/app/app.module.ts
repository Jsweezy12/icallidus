import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule,Routes } from "@angular/router";
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import {HomeComponent} from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ServicespageComponent } from './components/servicespage/servicespage.component';
import { ContractvComponent } from './components/contractv/contractv.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactComponent } from './components/contact/contact.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppmodernizationComponent } from './components/appmodernization/appmodernization.component';
import { DigitTComponent } from './components/digit-t/digit-t.component';
import { EnterpriseSSComponent } from './components/enterprise-ss/enterprise-ss.component';
import { DataanalyticsComponent } from './components/dataanalytics/dataanalytics.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { EgoveranceComponent } from './components/egoverance/egoverance.component';
import {SearchJson} from '../modal/serach'
//import {APP_BASE_HREF} from '@angular/common';

const ROUTES: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent}
  , {path:'modernization',component:AppmodernizationComponent},
  {path:'digital',component:DigitTComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'services',component:ServicespageComponent},
  {path:'contractv',component:ContractvComponent},
  {path:'careers', component:CareersComponent},
  {path:'contact',component:ContactComponent},
  {path:'solutions',component:SolutionsComponent},
  {path:'enterprise',component:EnterpriseSSComponent},
  {path:'analytics',component:DataanalyticsComponent},
  {path:'questions',component:QuestionsComponent},
  {path:'ediscovery',component:EgoveranceComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ServicespageComponent,
    ContractvComponent,
    CareersComponent,
    ContactComponent,
    SolutionsComponent,
    FooterComponent,
    AppmodernizationComponent,
    DigitTComponent,
    EnterpriseSSComponent,
    DataanalyticsComponent,
    QuestionsComponent,
    EgoveranceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    //RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [SearchJson],
  bootstrap: [AppComponent]
})
export class AppModule {


  
 }
