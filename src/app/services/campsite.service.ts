import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { campsite } from 'src/model/campsite';

@Injectable({
  providedIn: 'root'
})
export class CampsiteService {

  url='http://localhost:8082/campSite';
  id:number=0;

  constructor(private http:HttpClient) { }
  
  getcampSite(){
    return this.http.get<campsite[]>(this.url);
  }

  postcampSite(s: campsite){    
    return this.http.post<campsite>((`${this.url}/ajoutercampSite`),s);
  }

  deletecampSite(s: campsite){
    return this.http.delete(`${this.url}/${s.id_campSite}`);
  }

  updatecampSite(s: campsite) {
    return this.http.put<campsite>((`${this.url}/${s.id_campSite}`), campsite);
  }

  getcampSiteById(campsiteId: number):Observable<campsite> {
    return this.http.get<campsite>((`${this.url}/fetch/${campsiteId}`));
    
  }

}
