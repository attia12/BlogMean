import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {ArticleService} from "../../service/article.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-createarticle',
  templateUrl: './createarticle.component.html',
  styleUrls: ['./createarticle.component.css']
})
export class CreatearticleComponent implements OnInit {

  article :any = {
    title:'',
    content:'',

    tags:[],
    description:''


  }
  image:any;
  tag:any='';

  constructor(private authService :AuthService,private articleService:ArticleService,private router:Router) { }

  ngOnInit(): void {
  }

  create() {
    let fd=new FormData()
    fd.append('title',this.article.title);
    fd.append('content',this.article.content);
    fd.append('tags',this.article.tags.toString());
    fd.append('description',this.article.description);
    fd.append('image',this.image);
    fd.append('author',this.authService.getAuthorAccountDataDromToken()._id);
    this.articleService.create(fd).subscribe((response:any)=>{
      this.router.navigate(['/home']);
      console.log('success',response);
    },(err:any)=>{
      console.log(err);
    })


  }
  select(event :any)
  {
    this.image=event.target.files[0];
  }
}
