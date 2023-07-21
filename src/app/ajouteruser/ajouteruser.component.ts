import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { User } from 'src/model/User';

@Component({
  selector: 'app-ajouteruser',
  templateUrl: './ajouteruser.component.html',
  styleUrls: ['./ajouteruser.component.css']
})
export class AjouteruserComponent implements OnInit {
  user: User = new User();

  constructor(private http: HttpClient, private _router: Router) { }

  ngOnInit(): void { }

  add(): void {
    const url = 'http://localhost:8089/api/auth/signup';
    this.http
      .post(url, this.user)
      .pipe(
        tap(() => {
          // La création de l'utilisateur a réussi
          console.log('Utilisateur ajouté avec succès');
          // Réinitialisez le formulaire ou effectuez d'autres actions nécessaires
          this.user = new User();
          this._router.navigate(['/listeusers']);
        }),
        catchError((error) => {
          // Gérez l'erreur en cas d'échec de création de l'utilisateur
          console.error("Erreur lors de l'ajout de l'utilisateur", error);
          // Return an observable with the error so that the calling code can handle it
          return of(null);
        })
      )
      .subscribe();
  }
}
