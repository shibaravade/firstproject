import { Component, OnInit,Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() counterfunction = new EventEmitter();

  constructor() {
    
   }

  ngOnInit() {
    
  }

  counter = 0;
  
x = setInterval(() => { this.counter++; }, 1000); 
y;

run() {
  this.counterfunction.emit(this.counter);
 }


}
