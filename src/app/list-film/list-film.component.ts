import { Component,OnInit } from '@angular/core';
import { film } from 'src/model/film';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css']
})
export class ListFilmComponent implements OnInit{
  listFilm! : film[];
  constructor(private FilmService : FilmService){}
ngOnInit(): void {
  this.FilmService.getFilm().subscribe(
    (data:film[])=>this.listFilm=data)
}
details(f:film){
  f.views++;
}
}
