import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppleComponent } from './apple/apple.component';
import { BananaComponent } from './banana/banana.component';


const routes : Routes = [
{
  path : 'fruits', children: [
{path : 'apple' , component : AppleComponent},
{path : 'banana' , component : BananaComponent},
{path : '' , component : AppleComponent}
]
}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class FruitroutingModule { }
