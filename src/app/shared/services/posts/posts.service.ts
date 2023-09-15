import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private postUrl = 'assets/data/posts-data.json';

  constructor(private http: HttpClient) {}

  getPostsData(): Observable<any[]> {
    console.log('mennu URL', this.postUrl)
    return this.http.get<any[]>(this.postUrl);
  }
}