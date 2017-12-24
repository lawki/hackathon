import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Params,Router } from "@angular/router";

@Component({
  selector: 'app-team-registration',
  templateUrl: './team-registration.component.html',
  styleUrls: ['./team-registration.component.css']
})
export class TeamRegistrationComponent implements OnInit {

  form:FormGroup;
  _id: any;
  event: any={};

  constructor(
	private formBuilder: FormBuilder,
	private authService: AuthService,
  private router: Router,
  private route: ActivatedRoute,
  ) {
    this.createForm();
   }

   createForm(){
		this.form = this.formBuilder.group({
      team_name: [''],
      member1 : [''],
      member2: [''],      
      member3: [''],        
		});
		
  }

  onTeamRegisterSubmit(){
    const team = {
      username: JSON.parse(localStorage.getItem('user')).username,
      team_name: this.form.get('team_name').value, 
      member1: this.form.get('member1').value,
      member2: this.form.get('member2').value,
      member3: this.form.get('member3').value,
      event_id: this.event._id,
      event_title:this.event.event_title
    }
    
    console.log(team);
    this.authService.registerTeam(team)
    .subscribe((teams:any)=>this.router.navigate(['/profile']),err=>console.log(err));
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this._id = params['_id'];
    });

    this.authService.getEvent(this._id).subscribe(event=>
      {
        this.event=event;
      });
  }

}
