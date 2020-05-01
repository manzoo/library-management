import { Component, OnInit } from '@angular/core';
import { BookService } from './../services/book.service';
import { ToastrService } from "./../services/toastr.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

books = []
  constructor( private bookService : BookService, private toastr: ToastrService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.books = this.route.snapshot.data["books"]
  }

  editBook(book:any){

    this.toastr.success(book.name)

  }
  deleteBook(){

  }
}
