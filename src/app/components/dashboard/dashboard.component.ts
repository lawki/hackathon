import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	 users: any[]= new Array;

  constructor(private authService: AuthService) { }

  ngOnInit() {
	  this.authService.getUsers().subscribe(users => this.users=users);
  }
  
  deleteUser(_id: any) {
    this.authService.deleteUser(_id)
    .subscribe(users => this.users=users,err=>console.log(err));
  }

}
