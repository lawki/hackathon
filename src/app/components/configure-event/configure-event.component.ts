import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  teams: any[]= new Array;

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
      event_description: [''],
      location:[''],
      max_team_members:[''],
      max_ideas:[''],
      prize1:[''],
      prize2:[''],
      prize3:[''],
      winner1:[''],
      winner2:[''],
      winner3:[''],
      publish:[''],
      evaluators_array: this.formBuilder.array([])
		});
		
  }

  onChange(evaluator_username:string, isChecked: boolean) {
    const evaluatorsFormArray = <FormArray>this.form.controls.evaluators_array;

    if(isChecked) {
      evaluatorsFormArray.push(new FormControl(evaluator_username));
    } else {
      let index = evaluatorsFormArray.controls.findIndex(x => x.value == evaluator_username)
      evaluatorsFormArray.removeAt(index);
    }
}

  onConfigureRegisterSubmit(){
    const updated_event = {
      event_title: this.form.get('event_title').value, // E-mail input field
      host_username: JSON.parse(localStorage.getItem('host')).host_username, // Username input field
      event_description: this.form.get('event_description').value, // Password input field
      start: this.start_date, 
      end: this.end_date,
      location: this.form.get('location').value, // Password input field
      _id:this.event._id,
      max_team_members: this.form.get('max_team_members').value,
      max_ideas: this.form.get('max_ideas').value,
      prize1: this.form.get('prize1').value,
      prize2: this.form.get('prize2').value,
      prize3: this.form.get('prize3').value,
      winner1: this.form.get('winner1').value,
      winner2: this.form.get('winner2').value,
      winner3: this.form.get('winner3').value,
      publish: this.form.get('publish').value,
      evaluators_array:this.form.get('evaluators_array').value,
    }
    console.log(updated_event);
    this.authService.updateEvent(updated_event)
    .subscribe((events:any)=>this.router.navigate(['/view-host-events']),err=>console.log(err));
  }

  
  ngOnInit() {
    
    this.route.params.forEach((params: Params) => {
      this._id = params['_id'];
  });
  this.authService.getHostEventwiseTeams(this._id).subscribe(teams=>
    {
      this.teams=teams;
    });
    this.authService.getEvent(this._id).subscribe(data=>
      {
        this.event=data.event;
        this.start=data.event.start;
        this.end=data.event.end;
        this.start_date=data.event.start;
        this.end_date=data.event.end;
      });
      this.authService.getEvaluators().subscribe(evaluators=>
        {
          this.evaluators=evaluators;
        });
        
 }


}
