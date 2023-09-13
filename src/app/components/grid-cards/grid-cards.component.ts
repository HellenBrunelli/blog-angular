import { Component, OnInit } from '@angular/core';
import { dataMock } from 'src/app/data/dataMock';

@Component({
  selector: 'app-grid-cards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.scss']
})
export class GridCardsComponent implements OnInit {

  id:string="0" 
  cardPhoto:string="" 
  cardFlag:string="" 
  cardTitle:string=""
  cardAuthor:string="" 
  cardDate:string=""
  
  posts:any[] = dataMock;

  constructor() {
  }

  ngOnInit(): void {
  
  }  
}