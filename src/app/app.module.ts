import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookService } from './services/book.service';
import { ToastrService } from "./services/toastr.service";
import { BookDetailsComponent } from './book-details/book-details.component';
import { OldBooksComponent } from './old-books/old-books.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailsComponent,
    OldBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BookService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
