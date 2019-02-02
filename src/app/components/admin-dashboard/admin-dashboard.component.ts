import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  events: any[]= new Array;
  hosts: any[]= new Array;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getEvents().subscribe(events => this.events=events.events);
    this.authService.getHosts().subscribe(hosts => this.hosts=hosts);
}
deleteEvent(_id: any) {
  this.authService.deleteEvent(_id)
  .subscribe(events => this.events=events,err=>console.log(err));
}
deleteHost(_id: any) {
  this.authService.deleteHost(_id)
  .subscribe(hosts => this.hosts=hosts,err=>console.log(err));
}

}
