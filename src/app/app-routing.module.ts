import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from "./books/books.component";
import { OldBooksComponent } from './old-books/old-books.component';
import { BookDetailsComponent } from './book-details/book-details.component';


const routes: Routes = [
  { path : "oldbooks", component : OldBooksComponent},
  { path : "books", component : BooksComponent},
  { path : "books/:isbn", component : BookDetailsComponent},
  { path : "", redirectTo :"/books",pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
