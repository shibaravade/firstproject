import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms' ;
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyfirstComponentComponent } from './myfirst-component/myfirst-component.component';
import { MysecondComponent } from './mysecond/mysecond.component';

@NgModule({
  declarations: [
    AppComponent,
    MyfirstComponentComponent,
    MysecondComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
