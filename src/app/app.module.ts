import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule,Routes } from "@angular/router";

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
import { DigitTComponent } from './components/digit-t/digit-t.component'

const ROUTES: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent}
  , {path:'appm',component:AppmodernizationComponent},
  {path:'dt',component:DigitTComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'services',component:ServicespageComponent},
  {path:'contractv',component:ContractvComponent},
  {path:'careers', component:CareersComponent},
  {path:'contact',component:ContactComponent},
  {path:'solutions',component:SolutionsComponent}

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
    DigitTComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


  
 }
