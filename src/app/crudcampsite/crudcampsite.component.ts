import { Component, OnInit } from '@angular/core';
import { campsite } from 'src/model/campsite';
import { CampsiteService } from '../services/campsite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crudcampsite',
  templateUrl: './crudcampsite.component.html',
  styleUrls: ['./crudcampsite.component.css']
})
export class CrudcampsiteComponent implements OnInit {

  listCampSites!: campsite[];

  constructor(private CampsiteService: CampsiteService, private router: Router) { }

  ngOnInit(): void {
    this.CampsiteService.getcampSite().subscribe(
      (data: campsite[]) => this.listCampSites = data)
  }

  detail(id: number) {
    this.CampsiteService.id = id;
    this.router.navigate(['/detail/' + id]);
  }

  delete(campsite: campsite) {
    if (confirm('Are you sure to delete ' + campsite.name + ' ?')) {
      this.CampsiteService.deletecampSite(campsite).subscribe({
        next: (val: any) => {
          alert('Campsite deleted successfully');
          this.CampsiteService.getcampSite().subscribe(
            (data: campsite[]) => this.listCampSites = data)

        },
        error: (err: any) => {
          console.error(err);
        }
      }
      );
    }
  }

}
