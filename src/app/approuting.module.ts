import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreenComponent } from './colors/green/green.component';




const routes: Routes = [
  { path : 'fruits', loadChildren : './fruits/fruits.module#FruitsModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class ApproutingModule { }
