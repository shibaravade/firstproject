import { Component } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  x;
 y;
addnum  = '';
 add() {
   this.addnum = "" + ((+this.x) + (+this.y));
   
 }
 addtrue(){
   if (this.addnum)
   return true;
   else
   return false;
 }
}
