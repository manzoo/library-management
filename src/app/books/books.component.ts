import { Component, OnInit, Inject } from '@angular/core';
import { BookService } from './../services/book.service';
import { TOASTR_TOKEN, Toastr, JQ_TOKEN } from "./../services/index";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books = [];
  searchTerm: string = "";
  searched :boolean = false;
  constructor(
    private bookService: BookService,
    @Inject(TOASTR_TOKEN) private toastr: Toastr,
    @Inject(JQ_TOKEN) private $: any,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.books = this.route.snapshot.data["books"]
  }

  editBook(book: any) {

    this.toastr.success(book.name)

  }
  deleteBook() {

  }

  add() {
    console.log("clicked")
  }

  search(searchForm) {

    this.books = this.bookService.search(searchForm.searchTerm);
    this.searched = true;
  }

  public clearSearch() {
    this.books = this.bookService.search("");
    this.searchTerm ="";
    this.searched = false;
  }
}
