import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';
import { event } from 'src/model/event';

@Component({
  selector: 'app-add-e',
  templateUrl: './add-e.component.html',
  styleUrls: ['./add-e.component.css']
})
export class AddEComponent implements OnInit {

  
  event: event = new event();

  constructor(private crudService : CrudService, private router: Router) { }

  ngOnInit(): void {
  }
  add() {
    
    this.crudService.postevent(this.event).subscribe(
      {
        next: (val: any) => {
          alert('done');
          this.router.navigate(["/espaceadmin"]);

        },
        error: (err: any) => {
          console.error(err);
        }
      }
    );
    ;
  }
}
