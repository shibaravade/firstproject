import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent implements OnInit {

  constructor(private router : Router) { }



  ngOnInit() {
  }

  run() {
    this.router.navigate(['/fruits/banana']); 
  }

}