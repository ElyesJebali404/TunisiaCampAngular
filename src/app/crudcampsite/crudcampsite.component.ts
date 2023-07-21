import { Component, OnInit } from '@angular/core';
import { campsite } from 'src/model/campsite';
import { CampsiteService } from '../services/campsite.service';
import { Router } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-crudcampsite',
  templateUrl: './crudcampsite.component.html',
  styleUrls: ['./crudcampsite.component.css']
})
export class CrudcampsiteComponent implements OnInit {

  listCampSites!: campsite[];

  campsite: campsite = new campsite();


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
    if (confirm('Are you sure you want to delete ' + campsite.name + ' ?')) {
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

  update(id: number) {
    
    this.CampsiteService.getcampSiteById(id).subscribe(
      (data: campsite) => {
        this.campsite = data;
        console.log('Données du campsite :', this.campsite);
      },
      error => {
        console.error('Erreur lors de la récupération des données du campsite : ', error);
      }
    );
  }

  updating(campsite: campsite) {
    if (confirm('Are you sure you want to update ' + campsite.name + ' ?')) {
      this.CampsiteService.updatecampSite(campsite).subscribe(
        (campsite: campsite) => {
          alert('Campsite updated successfully !');
          this.CampsiteService.getcampSite().subscribe(
            (data: campsite[]) => this.listCampSites = data)
        },
        error => {
          console.error('Erreur lors de la mise à jour du campsite :', error);

        }
      );
      this.onCloseHandled();
    }

  }
  
  adding(){
    this.router.navigate(['/addcampsite']);
  }
  display = "none";
  openModal(id:number) {
    this.display = "block";
    this.update(id);
  }
  onCloseHandled() {
    this.display = "none";
  }

}