import { Component } from '@angular/core';
import { empty } from 'rxjs';
import { LibraryService } from './library.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  constructor(private lib:LibraryService) {

  }

  booksget = this.lib.books;
  newbooks;
  addBooks(a) {
  this.newbooks = this.lib.books.push(a);
  
  }
}
