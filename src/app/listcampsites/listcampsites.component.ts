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

  constructor(private CampsiteService : CampsiteService){}

ngOnInit(): void {

  this.CampsiteService.getcampSite().subscribe(
    ( data:campsite[] ) => this.listCampSites=data)
    console.log(this.listCampSites);
    
}

}
