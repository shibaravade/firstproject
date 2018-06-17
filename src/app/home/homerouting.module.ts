import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { HomedetailComponent } from './homedetail/homedetail.component';


const routes: Routes = [
  {path : 'homeheader' , component : HomeheaderComponent},
  {path : 'homedetail' , component : HomedetailComponent},
  {path : '' , component : HomeheaderComponent},
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})

export class HomeroutingModule { }
