import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/model/User';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  utilisateurs!: User[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchUtilisateurs();
  }
  fetchUtilisateurs(): void {
    const url = 'http://localhost:8089/user'; // L'URL de l'API des utilisateurs
    this.http.get<User[]>(url).subscribe((data) => {
      this.utilisateurs = data;
      console.log(this.utilisateurs);
    });
  }

  deleteUser(id: number) {
    const url = `http://localhost:8089/user/${id}`;

    this.http.delete(url).subscribe(
      () => {
        // La suppression a réussi, mettez à jour la liste des utilisateurs
        this.fetchUtilisateurs();
      },
      (error) => {
        // Gérer l'erreur en cas de suppression échouée
        console.error("Erreur lors de la suppression de l'utilisateur", error);
      }
    );
  }
}
