import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-host-events',
  templateUrl: './view-host-events.component.html',
  styleUrls: ['./view-host-events.component.css']
})
export class ViewHostEventsComponent implements OnInit {
  obj:any;
  name:any;
  host_events: any[]= new Array;
  constructor(private authService: AuthService,private router: Router) { 
  }

  ngOnInit() {
    this.obj=JSON.parse(localStorage.getItem('host'));
    this.name=this.obj.host_username;
    this.authService.getHostEvents(this.name).subscribe(host_events => this.host_events=host_events);
   }

}
