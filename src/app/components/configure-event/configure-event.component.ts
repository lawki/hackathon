import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Params,Router } from "@angular/router";


@Component({
  selector: 'app-configure-event',
  templateUrl: './configure-event.component.html',
  styleUrls: ['./configure-event.component.css']
})
export class ConfigureEventComponent implements OnInit {
  _id: any;
  event: any={};
  evaluators: any[]= new Array;

  form:FormGroup;
  message;
  messageClass;
  processing = false;

  start: Date ;
  end: Date;

  settings = {
      bigBanner: true,
      timePicker: true,
      format: 'dd-MM-yyyy',
      defaultOpen: false,
      closeOnSelect:false
  }
  start_date:Date;
  end_date:Date;

  onStartDateSelect($event){
    this.start_date=$event;
  }
  onEndDateSelect($event){
    this.end_date=$event;
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.createForm();
   }

  createForm(){
		this.form = this.formBuilder.group({
      event_title: ['',Validators.required],
      host_username: ['',Validators.required],
      event_description: [''],
      location:[''],
      max_team_members:[''],
      max_ideas:[''],
      prize:[''],
      publish:[''],
      evaluator_username:['']
		});
		
  }


  onConfigureRegisterSubmit(){
    const updated_event = {
      event_title: this.form.get('event_title').value, // E-mail input field
      host_username: this.form.get('host_username').value, // Username input field
      event_description: this.form.get('event_description').value, // Password input field
      start: this.start_date, 
      end: this.end_date,
      location: this.form.get('location').value, // Password input field
      _id:this.event._id,
      max_team_members: this.form.get('max_team_members').value,
      max_ideas: this.form.get('max_ideas').value,
      prize: this.form.get('prize').value,
      publish: this.form.get('publish').value,
      evaluator_username: this.form.get('evaluator_username').value,
    }
    console.log(updated_event);
    this.authService.updateEvent(updated_event)
    .subscribe((events:any)=>this.router.navigate(['/view-host-events']),err=>console.log(err));
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this._id = params['_id'];
  });
    this.authService.getEvent(this._id).subscribe(event=>
      {
        this.event=event;
        this.start=event.start;
        this.end=event.end;
        this.start_date=event.start;
        this.end_date=event.end;
      });
      this.authService.getEvaluators().subscribe(evaluators=>
        {
          this.evaluators=evaluators;
        });
  }


}
