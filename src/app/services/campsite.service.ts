import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { campsite } from 'src/model/campsite';

@Injectable({
  providedIn: 'root'
})
export class CampsiteService {

  url='http://localhost:8082/campSite';

  constructor(private http:HttpClient) { }
  
  getcampSite(){
    return this.http.get<campsite[]>(this.url);
  }

  postcampSite(s: campsite){
    return this.http.post<campsite>(this.url+"/ajoutercampsite/",s);
  }

  deletecampSite(s: campsite){
    return this.http.delete(this.url+"/"+s.id_campSite);
  }

  updatecampSite(s: campsite) {
    return this.http.put<campsite>(this.url+"/"+s.id_campSite, campsite);
  }

  getcampSiteById(campsiteId: number) {
    return this.http.get<campsite>(this.url+"fetch/"+campsiteId);
  }
}
