import { CampsiteService } from './../services/campsite.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { campsite } from 'src/model/campsite';

@Component({
  selector: 'app-addcampsite',
  templateUrl: './addcampsite.component.html',
  styleUrls: ['./addcampsite.component.css']
})
export class AddcampsiteComponent implements OnInit {
  campsite: campsite = new campsite();

  constructor(private CampsiteService: CampsiteService, private router: Router) { }

  ngOnInit(): void {
  }

  add() {
    console.log(this.campsite.image)
    this.CampsiteService.postcampSite(this.campsite).subscribe(
      {
        next:(val:any) =>{
          alert('Employee added successfully');
          this.router.navigate(["/listcampsites"]);

        },
        error:(err:any) =>{
          console.error(err);
        }
      }
    );
    ;
  }
}
