import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { film } from 'src/model/film';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit{
  film : film=new film();
  
  constructor(private filmService : FilmService,private router:Router){}
  
  ngOnInit(): void {
  }

  add(){

    if (this.film.views==null)
      {this.film.views=1;}
      
      if (this.film.public==null)
      {this.film.public=true;}

    console.log(this.film);
    
    this.filmService.postFilm(this.film).subscribe(
      ()=> this.router.navigate(["/list"])
    );
    ;
  }
}
