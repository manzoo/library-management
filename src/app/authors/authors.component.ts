import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../services/author.service';
import { IAuthor } from '../models';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors : IAuthor[];
  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe( authors  =>{
      this.authors = authors;
    } )
  }
}
