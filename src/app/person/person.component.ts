import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  personname = "Shiba";
  personage = 28;
  personstreetno = "103 viman jewel";
  personpincode = 411014;
}
