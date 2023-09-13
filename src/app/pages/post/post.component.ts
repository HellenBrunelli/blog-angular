import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataMock } from 'src/app/data/dataMock';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  
  postBanner:string = ''
  postFlag:string = ''
  postTitle:string = ''
  postAuthor:string = ''
  postDate:string = ''
  postArticle:string | undefined = ''

  private id:string | null  = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => this.id = value.get("id"))

    this.setValuesComponent(this.id)
  }

  setValuesComponent(id:string | null) {
    const data = dataMock.filter(article => article.id == id)[0];
    
    this.postBanner = data.photo;
    this.postFlag = data.flag;
    this.postTitle = data.title;
    this.postAuthor = data.author;
    this.postDate = data.date;
    this.postArticle = data.article
  }
}
