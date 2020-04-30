import { Component, OnInit } from '@angular/core';
import { BookService } from './../services/book.service';
import { ToastrService } from "./../services/toastr.service";

@Component({
  selector: 'app-old-books',
  templateUrl: './old-books.component.html',
  styleUrls: ['./old-books.component.css']
})
export class OldBooksComponent implements OnInit {

  books = []
  constructor( private bookService : BookService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.books = this.bookService.getOldBooks();
  }

  getHighlightClass(book: any){
    if(book.isbn.length > 5)
    return ["highlight"]
    return [];
  }
  getSyle(book: any): any{
    if(book.authors.length > 1)
    return { border :'2px solid red'}
    return {};
  }
  editBook(book:any){

    this.toastr.success(book.name)

  }
  deleteBook(){

  }
}
