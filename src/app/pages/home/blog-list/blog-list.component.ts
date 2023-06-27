import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../../service/article.service";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  articles:any

  constructor(private articleService:ArticleService) {

  }

  ngOnInit(): void {
    this.articleService.getAll().subscribe((response:any)=>{
      this.articles=response;
    },error => {console.log(error);})
  }

}
