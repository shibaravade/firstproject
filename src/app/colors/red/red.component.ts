import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent implements OnInit {

  constructor(private router : Router) { }

  id : number;

  ngOnInit() {
  }

 
  runid() {
    this.router.navigate(['/colors/green', this.id]); 
  }

}
