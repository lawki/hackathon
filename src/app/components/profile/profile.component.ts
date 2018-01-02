import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  events: any[]= new Array;
  teams: any[]= new Array;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getEvents().subscribe(data => 
      {
      this.events=data.events
      });
      this.authService.getTeams(JSON.parse(localStorage.getItem('user')).username).subscribe(teams => this.teams=teams);
  }

}
