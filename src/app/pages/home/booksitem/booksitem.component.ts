import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-booksitem',
  templateUrl: './booksitem.component.html',
  styleUrls: ['./booksitem.component.css']
})
export class BooksitemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() book:any;

}
