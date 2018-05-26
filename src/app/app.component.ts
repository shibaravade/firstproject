import { Component } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name : string = "Shiba";
  age : number = 1;
  myArray = [1,2,3];
  myObj= {"name":"xyz", "age":"1"}

  myFunction() {

  }

  weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


  bulb = [0,0,0,0,0];
  butoff ="off";
  butno = "on";
 path = ["./assets/bulboff.png","./assets/bulboff.png","./assets/bulboff.png","./assets/bulboff.png","./assets/bulboff.png"]; 
  onoff(x) {
    if(this.path[x] ==  "./assets/bulboff.png" ) {
      this.path[x] = "../assets/bulbon.png";
    }
   
    else
    {
      this.path[x] = "./assets/bulboff.png";
      
    }
  }

  clickbulb() {

  }
}
