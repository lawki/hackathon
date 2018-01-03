import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events: any[]= new Array;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getEvents().subscribe(data => 
      {
      this.events=data.events
      }); }

}
