import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultComponent } from '../default/default.component';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';



const routes: Routes = [
  {path : 'home' , component : HomeComponent},
  {path : 'about' , component : AboutComponent},
  {path : 'contact' , component : ContactComponent},
  {path : '' , component : HomeComponent},
  {path : '**' , component : DefaultComponent}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AapproutingModule { }
