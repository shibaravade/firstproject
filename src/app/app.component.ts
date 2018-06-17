import { Component } from '@angular/core';
import { empty } from 'rxjs';
import { FetchDataService } from './fetch-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data = {};
  show: boolean = false;
  item = {
    title : 'Trainer',
    body : 'Shiba',
    userId : 555
  }
  constructor(private dataservice: FetchDataService) { }

  showData() {
    this.dataservice.getData().subscribe(data => {
      this.data = data;
    })
  }

  setData() {
    this.dataservice.postData(this.item).subscribe(response => console.log(response));
    this.data = {};
  }

}
