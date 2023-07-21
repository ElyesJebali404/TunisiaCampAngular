import { CrudService } from './../services/crud.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { event } from 'src/model/event';



@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})



export class AddEventComponent {

  id: number = 0;
  event: event= new event();
 
  constructor(private router: Router, private CrudService : CrudService) {}


  ngOnInit() {
    this.id = this.CrudService.id;
    this.CrudService.getEventById(this.id).subscribe(
      (data: event) => {console.log(data.nbplace);
        this.event = data;
      
      })
    }

}
