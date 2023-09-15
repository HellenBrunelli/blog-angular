import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/shared/services/posts/posts.service';
@Component({
  selector: 'app-grid-cards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.scss']
})
export class GridCardsComponent implements OnInit {
  postsData: any[] = [];

  id:string="0" 
  cardPhoto:string="" 
  cardFlag:string="" 
  cardTitle:string=""
  cardAuthor:string="" 
  cardDate:string=""
  
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPostsData().subscribe(data => {
      console.log('data post', data)
      this.postsData = data;
    });
  }  
}