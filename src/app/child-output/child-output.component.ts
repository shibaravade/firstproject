import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.css']
})

export class ChildOutputComponent implements OnInit {
@Output() callfromparent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  run() {
    this.callfromparent.emit('');
  }

}
