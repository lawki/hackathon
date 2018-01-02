import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Params,Router } from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-eval-submit-evaluation-form',
  templateUrl: './eval-submit-evaluation-form.component.html',
  styleUrls: ['./eval-submit-evaluation-form.component.css']
})
export class EvalSubmitEvaluationFormComponent implements OnInit {

  _id: any;
  data: any[]= new Array();
  evaluator_username:String="";
  form:FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private _location: Location
  ) {
    this.createForm();
   }

  createForm(){
		this.form = this.formBuilder.group({
      criteria1: ['',Validators.required],
      criteria2: ['',Validators.required],
      criteria3: ['',Validators.required],
      comments: ['',Validators.required],
		});
		
  }

  onEvaluationFormSubmit(){
    const updatedEvaluationData = {
      team_id:this._id,
      evaluator_username:this.evaluator_username,
      criteria1: this.form.get('criteria1').value,
      criteria2: this.form.get('criteria2').value,
      criteria3: this.form.get('criteria3').value,
      comments: this.form.get('comments').value
    }
    this.authService.updateEvaluationData(updatedEvaluationData)
    .subscribe((data:any)=>this._location.back(),err=>console.log(err));
  }


  ngOnInit() {

    this.route.params.forEach((params: Params) => {
      this._id = params['_id'];
      this.evaluator_username=params['evaluator_username'];
    });

    this.authService.getEvaluationData(this._id).subscribe(data=>
      {
        this.data=data;
        console.log(data);
      });

  }

}
