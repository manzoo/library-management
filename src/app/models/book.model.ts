export interface IBook {
  title:string;
  isbn?:string;
  pageCount:number;
  publishedDate?: any;
  thumbnailUrl?:string;
  shortDescription?:string;
  longDescription?:string;
  status:string;
  authors:string[];
  categories:string[];
}
