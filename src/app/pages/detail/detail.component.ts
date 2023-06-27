import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ArticleService} from "../../service/article.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id:any;
  article:any;

  constructor(private act:ActivatedRoute,private articleService:ArticleService) { }

  ngOnInit(): void {
    this.id=this.act.snapshot.paramMap.get('id');
    this.articleService.getArticleById(this.id).subscribe((res:any)=>{
      this.article=res;
    },error => {
      console.log(error);
    })



  }

}
