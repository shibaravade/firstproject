import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutheaderComponent } from './aboutheader/aboutheader.component';
import { AboutdetailComponent } from './aboutdetail/aboutdetail.component';
import { AboutroutingModule } from './aboutrouting.module';

@NgModule({
  imports: [
    CommonModule,AboutroutingModule
  ],
  declarations: [AboutheaderComponent, AboutdetailComponent],
  exports : [AboutdetailComponent, AboutheaderComponent]
})
export class AboutModule { }
