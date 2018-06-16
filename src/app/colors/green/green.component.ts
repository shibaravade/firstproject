import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrls: ['./green.component.css']
})
export class GreenComponent implements OnInit {

  
  myparams = {};
constructor ( private route : ActivatedRoute) {
  this.route.params.subscribe(params => this.myparams = params);
}


  ngOnInit() {
  }

}
