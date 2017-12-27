import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { ActivatedRoute, Params,Router } from "@angular/router";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-eval-teamwise-submissions',
  templateUrl: './eval-teamwise-submissions.component.html',
  styleUrls: ['./eval-teamwise-submissions.component.css']
})
export class EvalTeamwiseSubmissionsComponent implements OnInit {

  _id: any;
  files: any[]= new Array;
  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    ) {}



  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this._id = params['_id'];
    });
    this.authService.getEvalTeamwiseSubmissions(this._id).subscribe(files=>
      {
        this.files=files;
      });
  }

}
