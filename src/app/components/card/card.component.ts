import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  id:string = '0'
  @Input()
  cardPhoto:string = ''
  @Input()
  cardFlag:string = ''
  @Input()
  cardTitle:string = ''
  @Input()
  cardAuthor:string = ''
  @Input()
  cardDate:string = ''
  
  constructor() {

  }

  ngOnInit(): void {
      
  }
}
