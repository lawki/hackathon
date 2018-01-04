import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'contacts-list',
  template: `
    <ul>
      <li *ngFor="let event of events">
        <a [routerLink]="['/contact',event._id]">{{event.event_title}}</a>
      </li>
    </ul>
  `
}) 
export class ContactsListComponent implements OnInit {
  
  events:any[]=new Array;
  contacts: any[];
  
  constructor(private authService: AuthService) {}
  
  ngOnInit() {
    this.authService.getEvents().subscribe(data => this.events=data.events);
  }
}
 

/*
Copyright 2016 thoughtram GmbH. All Rights Reserved.
Use of this source code is governed by an TTML-style license that
can be found in the license.txt file at http://thoughtram.io/license.txt
*/