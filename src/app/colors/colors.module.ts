import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedComponent } from './red/red.component';
import { GreenComponent } from './green/green.component';
import { ColorroutingModule } from './colorrouting.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,ColorroutingModule, FormsModule
  ],
  declarations: [RedComponent, GreenComponent]
})
export class ColorsModule { }
