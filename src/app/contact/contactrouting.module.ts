import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactheaderComponent } from './contactheader/contactheader.component';
import { ContactdetailComponent } from './contactdetail/contactdetail.component';


const routes: Routes = [
  {path : 'contactheader' , component : ContactheaderComponent},
  {path : 'contactdetail' , component : ContactdetailComponent}
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class ContactroutingModule { }
