import { Injectable } from "@angular/core";
import { IAuthor } from '../models/author.model';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AuthorService {

  authors: IAuthor[];

  constructor(){
    this.authors = AUTHORS;
  }

  getAuthors(): Observable<IAuthor[]>{
    var subject = new Subject<IAuthor[]>();
    setTimeout(() => {
      subject.next(this.authors);
      subject.complete();
    }, 100);

    return subject;
  }

  add(author:IAuthor){
    this.authors.push(author);
  }
}

const AUTHORS: IAuthor[] =[{
  firstName:"John",
  lastName : "Skeet",
  email : "JohnS@gmail.com"
}]
