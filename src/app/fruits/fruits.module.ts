import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppleComponent } from './apple/apple.component';
import { BananaComponent } from './banana/banana.component';
import { FruitroutingModule } from './fruitrouting.module';

@NgModule({
  imports: [
    CommonModule, FruitroutingModule
  ],
  declarations: [AppleComponent, BananaComponent]
})
export class FruitsModule { }
