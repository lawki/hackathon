import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd,Params,Router } from "@angular/router";
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-join-event',
  templateUrl: './join-event.component.html',
  styleUrls: ['./join-event.component.css']
})
export class JoinEventComponent implements OnInit {
  _id: any;
  event: any = {};
  form:FormGroup;

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
      event_id: this._id,
      event_title:this.event.event_title
    }
    
    console.log(team);
    
    this.authService.registerTeam(team)
    .subscribe((teams:any)=>{
      this.router.navigate(['/event-page',this._id]);
    });
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this._id = params['_id'];
  });

  this.authService.getEvent(this._id).subscribe(data => {
    this.event = data.event;

});

  }

}
