import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private bookService  : BookService, private route:ActivatedRoute) { }
  book : any;

  ngOnInit(): void {
    let isbn = this.route.snapshot.params['isbn'];
    this.book = this.bookService.getByIsbn(isbn)
  }

}
