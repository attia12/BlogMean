import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }
  private url='http://localhost:3000/author/';
  register(auther:any)
  {

    return this.httpClient.post(this.url+'register',auther);

  }
  login(auther:any)
  {

    return this.httpClient.post(this.url+'login',auther);

  }
  isLoggedIn(){
    let token=localStorage.getItem('token');
    if(token)
    {
      return true;


    }
    else {
      return false
    }
  }

  getAuthorAccountDataDromToken()

  {
    let token=localStorage.getItem('token');
    if(token)
    {
      let data = JSON.parse(window.atob(token.split('.')[1]));

      return data;

    }
  }
  getById(id:any)
  {
    return this.httpClient.get(this.url+'getbyid/'+id);
  }
}
