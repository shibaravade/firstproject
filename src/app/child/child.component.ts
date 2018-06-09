import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit() {
    
  }

  counter = 0;
  
x = setInterval(() => { this.counter++; }, 1000); 
y;
run() {
 var y = this.counter;

}



}
