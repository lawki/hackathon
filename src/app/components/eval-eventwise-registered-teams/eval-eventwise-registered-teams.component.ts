import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { ActivatedRoute, Params,Router } from "@angular/router";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-eval-eventwise-registered-teams',
  templateUrl: './eval-eventwise-registered-teams.component.html',
  styleUrls: ['./eval-eventwise-registered-teams.component.css']
})
export class EvalEventwiseRegisteredTeamsComponent implements OnInit {
  _id: any;
  teams: any[]= new Array;
  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    ) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this._id = params['_id'];
    });
    this.authService.getEvalEventwiseTeams(this._id).subscribe(teams=>
      {
        this.teams=teams;
      });
  }

}
