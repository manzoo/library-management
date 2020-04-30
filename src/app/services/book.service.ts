import { Injectable } from '@angular/core'

@Injectable()
export class BookService{
  getBooks(){

    return [{
      name: "Monk who sold ferrari",
      isbn : "sds",
      authors : ["Swamy Aathmananda"],
      price : 1800,
      countryCode :"IN",
      isEditable : true
    },{
      name: "Learn JS in 1 week",
      isbn : "sdsdsdsdsd",
      authors : ["Zubar","Sachita"],
      price : 0,
      countryCode :"IN",
      isEditable : true
    },{
      name: "C# in depth",
      isbn : "sdsdsdsdsd",
      authors : ["John Skeet","xyz"],
      price : 134,
      countryCode :"US",
      url: "www.google.com",
      isEditable : false
    },{
      name: "C# in depth",
      isbn : "",
      authors : ["John Skeet","xyz"],
      price : 286,
      countryCode :"IN",
      isEditable : true
    },{
      name: "You know nothing!!!",
      isbn : "ISBN2879287289",
      authors : ["John Snow"],
      price : 111114,
      countryCode :"UK",
      isEditable : false
    }]
  }
}
