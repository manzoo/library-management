import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { BookService } from "./book.service";
import { map } from "rxjs/operators";

@Injectable()
export class BooksResolver implements Resolve<any>{

  constructor(private bookService : BookService){
  }
  resolve(){
    return this.bookService.getBooks().pipe(map(books => books))
  }
}
