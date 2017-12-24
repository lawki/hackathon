import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.css']
})
export class ViewEventsComponent implements OnInit {
  events: any[]= new Array;
  
    constructor(private authService: AuthService) { 
    }
  
    ngOnInit() {
        this.authService.getEvents().subscribe(events => this.events=events.events);
    }
    deleteEvent(_id: any) {
      this.authService.deleteEvent(_id)
      .subscribe(events => this.events=events,err=>console.log(err));
    }
  
  
  }
  