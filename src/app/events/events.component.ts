import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../services/crud.service';
import { panier } from 'src/model/panier';
import { event } from 'src/model/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events!: any[];
  panier: panier[] = [];
  item!: any[];

  id: number= 1;
  panierId:number =1;
  router: any;

  
  constructor(private http: HttpClient,  private CrudService : CrudService) { }

  ngOnInit() {
    this.getEvents();
    
  }
  addEvent(id: number) {
    this.CrudService.id = id;
    this.router.navigate(['/details/' + id]);
  }


    getEvents() {
      console.log('test');
      this.http.get<any[]>('http://localhost:8089/events').subscribe(
        response => {
          this.events = response;
        
        },
        error => {
          console.log('Une erreur s\'est produite lors de la récupération des événements:', error);
        }
      );
    }

    deleteEv(idp : number, ide: number) {
      if (confirm('Are you sure you want to delete  ?')) {
        this.CrudService.deleteE(idp,ide).subscribe({
          next: (val: any) => {
            alert(' deleted successfully');
           
            this.CrudService.getPanier().subscribe(
              (data: panier[]) => this.panier = data)
  
          },
          error: (err: any) => {
            console.error(err);
          }
        }
        );
      }
    }
  

    ajouterEvenementAuPanier(panierId: number, event: event): void {
      this.CrudService.ajouterEvenementAuPanier(panierId, event).subscribe(
        (response: panier) => {
          
          console.log(event);
          console.log('Événement ajouté au panier :', response);
        },
        (error) => {
  
          console.log(event);
          console.error('Erreur lors de l\'ajout de l\'événement au panier :', error);
        }
      );
    }


    getPanier() {
      this.CrudService.getPanier().subscribe(
        (data: panier[]) => {
          this.panier = data;
         // Store the retrieved panier data in the component property
        },
        (error) => {
          console.error('Error while fetching the panier:', error);
          // Handle the error (e.g., show an error message to the user)
        }
      );
    }



    

  }
