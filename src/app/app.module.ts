import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms' ;
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Feature1Module } from './feature1/feature1.module';
import { Feature2Module } from './feature2/feature2.module';
import { Feature3Module } from './feature3/feature3.module';
import { FruitsModule } from './fruits/fruits.module';
import { ColorsModule } from './colors/colors.module';
import { ApproutingModule } from './approuting.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Feature1Module,
    Feature2Module,
    Feature3Module,
    ColorsModule,
    ApproutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
