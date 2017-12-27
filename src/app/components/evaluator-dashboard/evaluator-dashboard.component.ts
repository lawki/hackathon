import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluator-dashboard',
  templateUrl: './evaluator-dashboard.component.html',
  styleUrls: ['./evaluator-dashboard.component.css']
})
export class EvaluatorDashboardComponent implements OnInit {

  obj:any;
  name:any;
  evaluator_events: any[]= new Array;
  constructor(private authService: AuthService,private router: Router) { 
  }

  ngOnInit() {
    this.obj=JSON.parse(localStorage.getItem('evaluator'));
    this.name=this.obj.evaluator_username;
    this.authService.getEvaluatorEvents(this.name).subscribe(evaluator_events => this.evaluator_events=evaluator_events);
   }

}
