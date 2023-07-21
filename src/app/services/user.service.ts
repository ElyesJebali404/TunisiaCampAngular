import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url='http://localhost:8089/user';

  constructor(private http:HttpClient) { }
  
  getUser(){
    return this.http.get<User[]>(this.url);
  }

  postUser(s: User){
    return this.http.post<User>(this.url+"/ajouteruser/",s);
  }

  deleteUser(s: User){
    return this.http.delete(this.url+"/"+s.id);
  }

  updateUser(s: User) {
    return this.http.put<User>(this.url+"/"+s.id, User);
  }

  getUserById(userId: number) {
    return this.http.get<User>(this.url+"fetch/"+userId);
  }

}

