import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {ArticleService} from "../../service/article.service";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  id:any;
  author :any;

  articles:any;

  constructor(private act:ActivatedRoute,private authService:AuthService,private articleService:ArticleService) { }

  ngOnInit(): void {
    this.id= this.act.snapshot.paramMap.get('id');
    this.authService.getById(this.id).subscribe((response:any)=>{
      this.author=response;
      console.log(this.author);
    });
    this.articleService.getArticleByAuthor(this.id).subscribe((res:any)=>{
      this.articles=res;
    },error => {
      console.log(error);
    })

  }

}
