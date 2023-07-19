import { Component, OnInit } from '@angular/core';
import { CampsiteService } from '../services/campsite.service';
import { Router } from '@angular/router';
import { campsite } from 'src/model/campsite';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit{
  listCampSites!: campsite[];

  campsite: campsite = new campsite();


  constructor(private CampsiteService: CampsiteService, private router: Router) { }

  ngOnInit(): void {
    this.CampsiteService.getcampSite().subscribe(
      (data: campsite[]) => this.listCampSites = data)
  }

booking_event(id:number,price:number){
  this.CampsiteService.id = id;
  this.CampsiteService.price = price;
  this.router.navigate(['/booking/' + id]);
}

}
