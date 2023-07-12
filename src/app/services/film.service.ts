import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { film } from 'src/model/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  url='http://localhost:3000/film';
  constructor(private http:HttpClient) { }
  getFilm(){
    return this.http.get<film[]>(this.url);
  }
  postFilm(s: film){
    return this.http.post<film>(this.url,s);
  }
}
