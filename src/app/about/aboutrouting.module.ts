import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutheaderComponent } from './aboutheader/aboutheader.component';
import { AboutdetailComponent } from './aboutdetail/aboutdetail.component';


const routes: Routes = [
  {path : 'aboutheader' , component : AboutheaderComponent},
  {path : 'aboutdetail' , component : AboutdetailComponent}
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AboutroutingModule { }
