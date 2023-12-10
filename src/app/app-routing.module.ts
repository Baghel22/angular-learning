import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutingComponetComponent } from './components/routing-componet/routing-componet.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SignupComponent } from './auth/signup/signup.component';
import { TestingComponent } from './components/testing/testing.component';
import { LoginComponent } from './auth/login/login.component';
import { ContactusComponent } from './static/contactus/contactus.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';

const routes: Routes = [
  {path :'',redirectTo:'homepage',pathMatch:'full'},
  {path:'testing',component:TestingComponent},
  {path:'routing',component:RoutingComponetComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'signup', component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'serach-filter',component:SearchFilterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
