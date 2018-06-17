import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactheaderComponent } from './contactheader/contactheader.component';
import { ContactdetailComponent } from './contactdetail/contactdetail.component';
import { ContactroutingModule } from './contactrouting.module';

@NgModule({
  imports: [
    CommonModule, ContactroutingModule
  ],
  declarations: [ContactheaderComponent, ContactdetailComponent],
  exports :[ContactdetailComponent, ContactheaderComponent]
})
export class ContactModule { }
