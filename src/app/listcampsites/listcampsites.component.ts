import { Router } from '@angular/router';
import { CampsiteService } from './../services/campsite.service';
import { Component, OnInit } from '@angular/core';
import { campsite } from 'src/model/campsite';

@Component({
  selector: 'app-listcampsites',
  templateUrl: './listcampsites.component.html',
  styleUrls: ['./listcampsites.component.css']
})
export class ListcampsitesComponent implements OnInit{

  listCampSites! : campsite[];

  constructor(private CampsiteService : CampsiteService,private Router:Router){}

ngOnInit(): void {
  this.CampsiteService.getcampSite().subscribe(
    ( data:campsite[] ) => this.listCampSites=data)
}

detail(id:number){
  this.CampsiteService.id=id;
  this.Router.navigate(['/detail/'+id]);
}

}
