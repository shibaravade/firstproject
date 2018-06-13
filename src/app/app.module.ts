import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms' ;
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DefaultComponent } from './default/default.component';
import { AapproutingModule } from './aapprouting/aapprouting.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AapproutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
