import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient, private _router: Router) {}

  ngOnInit(): void {}

  login(): void {
    const url = 'http://localhost:8089/api/auth/signin';
    const email = (
      document.getElementById('form2Example17') as HTMLInputElement
    ).value;
    const password = (
      document.getElementById('form2Example27') as HTMLInputElement
    ).value;
    const user = { username: email, password };

    this.http
      .post(url, user)
      .pipe(
        tap((response: any) => {
          // Check for roles array in the response
          const userRoles: string[] = response.roles; // Replace 'roles' with the actual key for the roles array in the response

          // Login successful
          console.log('Login successful');

          localStorage.setItem('userRole', JSON.stringify(userRoles));

          // Redirect based on user roles
          if (userRoles.includes('ROLE_ADMIN')) {
            this._router.navigate(['/listeusers']);
          } else {
            this._router.navigate(['/profile']);
          }
        }),
        catchError((error) => {
          // Handle login error
          console.error('Error during login', error);
          // Return a safe value to prevent breaking the observable chain
          return of(null);
        })
      )
      .subscribe();
  }
}
