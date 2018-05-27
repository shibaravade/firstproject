import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
iamparentproperty = 'I am a Parent property';

iamparentproperty2 = 'I am a Parent Property 2';


parentoutput() {
  alert("Calling from Parent to Child Output");
}

}
