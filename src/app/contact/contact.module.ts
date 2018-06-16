import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactheaderComponent } from './contactheader/contactheader.component';
import { ContactdetailComponent } from './contactdetail/contactdetail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContactheaderComponent, ContactdetailComponent],
  exports :[ContactdetailComponent, ContactheaderComponent]
})
export class ContactModule { }
