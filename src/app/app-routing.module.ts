import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from "./books/books.component";
import { OldBooksComponent } from './old-books/old-books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksResolver } from './services/book.resolver.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorComponent } from './author/author.component';


const routes: Routes = [
  { path : "oldbooks", component : OldBooksComponent},
  { path : "books", component : BooksComponent, resolve:{books : BooksResolver}},
  { path : "books/:isbn", component : BookDetailsComponent},
  { path: "authors", component : AuthorsComponent},
  { path: "authors/create", component : AuthorComponent},
  { path : "", redirectTo :"/books",pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
