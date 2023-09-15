import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuUrl = 'assets/data/menu-data.json'; // Caminho para o arquivo JSON

  constructor(private http: HttpClient) { }

  getMenuData(): Observable<any[]> {
    console.log('mennu URL', this.menuUrl)
    return this.http.get<any[]>(this.menuUrl);
  }
}