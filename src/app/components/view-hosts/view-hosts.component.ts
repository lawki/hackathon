import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-view-hosts',
  templateUrl: './view-hosts.component.html',
  styleUrls: ['./view-hosts.component.css']
})
export class ViewHostsComponent implements OnInit {
  hosts: any[]= new Array;

  constructor(private authService: AuthService) { 
  }

  ngOnInit() {
      this.authService.getHosts().subscribe(hosts => this.hosts=hosts);
  }
  deleteHost(_id: any) {
    this.authService.deleteHost(_id)
    .subscribe(hosts => this.hosts=hosts,err=>console.log(err));
  }


}
