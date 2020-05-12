import { Component, OnInit } from '@angular/core';
import { Observable, interval } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  counter:number;
  constructor() { }

  ngOnInit(): void {
     let counter$ = interval(1000);

     counter$.subscribe(a =>{
       this.counter = a;
     })
  }

}
