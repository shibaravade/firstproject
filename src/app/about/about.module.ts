import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutheaderComponent } from './aboutheader/aboutheader.component';
import { AboutdetailComponent } from './aboutdetail/aboutdetail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AboutheaderComponent, AboutdetailComponent],
  exports : [AboutdetailComponent, AboutheaderComponent]
})
export class AboutModule { }
