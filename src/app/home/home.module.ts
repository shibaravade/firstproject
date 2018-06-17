import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { HomedetailComponent } from './homedetail/homedetail.component';
import { HomeroutingModule } from './homerouting.module';

@NgModule({
  imports: [
    CommonModule,HomeroutingModule
  ],
  declarations: [HomeheaderComponent, HomedetailComponent],
  exports : [HomeheaderComponent, HomedetailComponent]
})
export class HomeModule { }
