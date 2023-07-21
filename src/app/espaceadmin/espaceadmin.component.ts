import { CrudService } from './../services/crud.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PopupService } from './../services/popup.service';
import { ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { event } from 'src/model/event';


@Component({
  selector: 'app-espaceadmin',
  templateUrl: './espaceadmin.component.html',
  styleUrls: ['./espaceadmin.component.css']
})
export class EspaceadminComponent implements OnInit {

  events!: event[];


   event: event= new event();



  msg !: string;
  ide!: number;


  public isPopupOpen !: boolean; 
  
  constructor(private http: HttpClient, private CrudService : CrudService, private elementRef: ElementRef,  private router: Router) { }

  ngOnInit(): void {
    this.CrudService.getevents().subscribe(
      (data: event[]) => this.events = data)
    console.log(this.isPopupOpen);
    
  }

  addEvent(id: number) {
    this.CrudService.id = id;
    this.router.navigate(['/details/' + id]);
  }

  update(e: event) {
    this.CrudService.updateEvent(e).subscribe(
      (data:event) => {
        this.event = data;
        console.log('Données du campsite :', this.event);
      },
      error => {
        console.error('Erreur lors de la récupération des données du campsite :', error);
      }
    );
  }

  
  updating(event : event) {
    if (confirm('Are you sure you want to update ' + event.nomEvenement + ' ?')) {
      this.CrudService.updateEvent(event).subscribe(
        (event : event) => {
          alert('Campsite updated successfully');
          this.CrudService.getevents().subscribe(
            (data:event[]) => this.events = data)
        },
        error => {
          console.error('Erreur lors de la mise à jour du evenement :', error);

        }
      );
    }
  }

  closePopup(): void {
    this.isPopupOpen = false;
    this.getEvents();
  }



  add(){
    this.router.navigate(['/adde']);
  }





  getEvents() {
    console.log('test');
    this.CrudService.getevents();
  }

  supprimerEvenement(e : event) {
  if (confirm('Are you sure you want to delete ' + e.nomEvenement + ' ?')) {
    this.CrudService.deleteEvent(e).subscribe({
      next: (val: any) => {
        alert('Campsite deleted successfully');
        this.CrudService.getevents().subscribe(
          (data: event[]) => this.events = data)

      },
      error: (err: any) => {
        console.error(err);
      }
    }
    );
  }
}



}
