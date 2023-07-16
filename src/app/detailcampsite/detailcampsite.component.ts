import { CampsiteService } from './../services/campsite.service';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { campsite } from 'src/model/campsite';

@Component({
  selector: 'app-detailcampsite',
  templateUrl: './detailcampsite.component.html',
  styleUrls: ['./detailcampsite.component.css']
})
export class DetailcampsiteComponent implements OnInit {
  currentUrl!: string;
  id: number = 0;
  campsite: campsite = new campsite();
  constructor(private router: Router, private CampsiteService: CampsiteService) {

  }
  ngOnInit() {
    this.id = this.CampsiteService.id;
    this.CampsiteService.getcampSiteById(this.id).subscribe(
      (data: campsite) => {console.log(data);
        this.campsite = data;
      
      })
     
  }

}
