import { Component } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  configObject = {'myclass1':'false', 'myclass2':'true'};
  configObject1 = {'border':'1px solid blue', 'color':'black'}
  butoff =['Off','Off','Off','Off','Off'];
  
 path = ["../assets/bulboff.png","../assets/bulboff.png","../assets/bulboff.png","../assets/bulboff.png","../assets/bulboff.png"]; 
 
 onoff(x) {
    if(this.path[x] ==  "../assets/bulboff.png" ) {
      this.path[x] = "../assets/bulbon.png";
      this.butoff[x] = "Off";
    }
   
    else
    {
      this.path[x] = "../assets/bulboff.png";
      this.butoff[x] = "On";
    }
  }

  
}
