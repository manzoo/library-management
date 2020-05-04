import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookService, BooksResolver,AuthorService, TOASTR_TOKEN,Toastr, JQ_TOKEN  } from './services/index';
import { BookDetailsComponent } from './book-details/book-details.component';
import { OldBooksComponent } from './old-books/old-books.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorComponent } from './author/author.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

let toastr:Toastr = window["toastr"];
let jQuery = window["$"];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailsComponent,
    OldBooksComponent,
    AuthorsComponent,
    AuthorComponent,
    ModalDialogComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [BookService,
    {
      provide : TOASTR_TOKEN,
      useValue : toastr
    },
    BooksResolver,
    { provide: JQ_TOKEN, useValue:jQuery },
    { provide: AuthorService, useClass:AuthorService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
