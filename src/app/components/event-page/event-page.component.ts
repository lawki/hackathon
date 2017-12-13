import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {
  _id: any;
  event: any={};
  constructor( private authService: AuthService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this._id = params['_id'];
  });
    this.authService.getEvent(this._id).subscribe(event=>this.event=event);
  }

}
