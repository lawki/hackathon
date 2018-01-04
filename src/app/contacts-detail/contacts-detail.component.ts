import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'contacts-detail',
  template: `
    <h2>Event Details</h2>
    
    <dl>
      <dd>{{event.event_title}}</dd>
      <dd>{{event.host_username}}</dd>
    </dl>
    
    <p><a routerLink="/">Back to list</a></p>
  `
})
export class ContactsDetailComponent implements OnInit {
  

  x:any={};
  event:any={};
  
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.x = this.route.snapshot.data['contact'];
    this.event=this.x.event;

  }
}

