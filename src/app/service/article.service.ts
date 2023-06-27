import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient:HttpClient) { }
  private url='http://localhost:3000/article/';

  create(article:any)
  {
    return this.httpClient.post(this.url+'ajout',article);
  }
  getAll()
  {
    return this.httpClient.get(this.url+'all');

  }
  getArticleByAuthor(id:any)
  {
    return this.httpClient.get(this.url+'getbyidauthor/'+id);

  }
  getArticleById(id:any)
  {
    return this.httpClient.get(this.url+'getbyid/'+id);

  }


}
