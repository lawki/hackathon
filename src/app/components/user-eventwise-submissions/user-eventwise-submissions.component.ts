import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from "@angular/router";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-eventwise-submissions',
  templateUrl: './user-eventwise-submissions.component.html',
  styleUrls: ['./user-eventwise-submissions.component.css']
})
export class UserEventwiseSubmissionsComponent implements OnInit {

  _id: any;
  event_title:any;
  files: any[]= new Array;
  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    ) {}



  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this._id = params['_id'];
      this.event_title=params['event_title'];
    });
    this.authService.getUserTeamwiseSubmissions(this._id).subscribe(files=>
      {
        this.files=files;
      });
  }
}
