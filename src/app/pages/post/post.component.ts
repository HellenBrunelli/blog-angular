import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/shared/services/posts/posts.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  postsData: any[] = [];
  
  postBanner:string = ''
  postFlag:string = ''
  postTitle:string = ''
  postAuthor:string = ''
  postDate:string = ''
  postArticle:string | undefined = ''

  private id:string | null  = "0"

  constructor(
    private route:ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => this.id = value.get("id"))

    this.setValuesComponent(this.id)
  }

  setValuesComponent(id:string | null) {
    this.postsService.getPostsData().subscribe(data => {
      const index = Number(id) - 1;
      const postData = data[index];

      this.postBanner = postData.photo;
      this.postFlag = postData.flag;
      this.postTitle = postData.title;
      this.postAuthor = postData.author;
      this.postDate = postData.date;
      this.postArticle = postData.article
    });
  }
}
