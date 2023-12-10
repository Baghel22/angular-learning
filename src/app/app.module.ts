import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingComponent } from './components/testing/testing.component';
import { RoutingComponetComponent } from './components/routing-componet/routing-componet.component';
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
import { HeaderComponent } from './provides/header/header.component';
import { FooterComponent } from './provides/footer/footer.component';
import { BannereComponent } from './components/bannere/bannere.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { ContactusComponent } from './static/contactus/contactus.component';
import { SplitPipe } from './customCreatePipe/split.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ChnagecolorDirective } from './directivescopmponent/chnagecolor.directive';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { FilterPipe } from './customCreatePipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    RoutingComponetComponent,
    HeaderComponent,
    FooterComponent,
    BannereComponent,
    HomepageComponent,
    SignupComponent,
    LoginComponent,
    ContactusComponent,
    SplitPipe,
    ChnagecolorDirective,
    SearchFilterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    ReactiveFormsModule, FormsModule,
    ToastrModule.forRoot(
      {
        timeOut: 10000,
        positionClass: 'toast-top-center',
        preventDuplicates: true,
      }
    ), // ToastrModule added
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
