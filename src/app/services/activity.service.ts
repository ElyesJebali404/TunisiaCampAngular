import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { activity } from 'src/model/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  url='http://localhost:8082/activity';

  constructor(private http:HttpClient) { }
  
  getActivity(){
    return this.http.get<activity[]>(this.url);
  }

  postActivity(s: activity){
    return this.http.post<activity>(this.url+"/ajouteractivity/",s);
  }

  deleteActivity(s: activity){
    return this.http.delete(this.url+"/"+s.id_activity);
  }

  updateActivity(s: activity) {
    return this.http.put<activity>(this.url+"/"+s.id_activity, activity);
  }

  getActivityById(activityId: number) {
    return this.http.get<activity>(this.url+"fetch/"+activityId);
  }
}

