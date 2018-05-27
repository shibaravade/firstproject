import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-child-input',
  templateUrl: './child-input.component.html',
  styleUrls: ['./child-input.component.css']
})
export class ChildInputComponent implements OnInit {
@Input() igotochild;
@Input() sendtochild;

constructor() { }

  ngOnInit() {
  }

  accessparent() {
    alert(this.igotochild);
  }

  accessparent2() {
    alert(this.sendtochild);
  }
}
