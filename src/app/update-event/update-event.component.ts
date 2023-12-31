import { PopupService } from './../services/popup.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent {
  id!: number;
  nomEvenement!: string;
  description!: string;
  place!: string;
  dateEvenement!: string;

  constructor(private http: HttpClient, public PopupService: PopupService) {}


closePopup(): void {
    this.PopupService.closePopup();
  }
  
  modifierEvenement(): void {
    if (!this.id) {
      console.error('Veuillez spécifier l\'ID de l\'événement à modifier.');
      return;
    }

    const url = `http://localhost:8089/update_event/${this.id}`;

    const eventData = {
      nomEvenement: this.nomEvenement,
      description: this.description,
      place: this.place,
      dateEvenement: this.dateEvenement
    };

    this.http.put(url, eventData)
      .subscribe(
        (response) => {
          console.log('Événement modifié avec succès :', response);
          // Réinitialiser les champs de formulaire
         
          this.nomEvenement = '';
          this.description = '';
          this.place = '';
          this.dateEvenement = '';
        },
        error => {
          console.error('Une erreur s\'est produite lors de la modification de l\'événement :', error);
        }
      );
  }
}
