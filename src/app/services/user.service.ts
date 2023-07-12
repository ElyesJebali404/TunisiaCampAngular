import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from 'src/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url='http://localhost:8082/user';

  constructor(private http:HttpClient) { }
  
  getUser(){
    return this.http.get<user[]>(this.url);
  }

  postUser(s: user){
    return this.http.post<user>(this.url+"/ajouteruser/",s);
  }

  deleteUser(s: user){
    return this.http.delete(this.url+"/"+s.id);
  }

  updateUser(s: user) {
    return this.http.put<user>(this.url+"/"+s.id, user);
  }

  getUserById(userId: number) {
    return this.http.get<user>(this.url+"fetch/"+userId);
  }

}

