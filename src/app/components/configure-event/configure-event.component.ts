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

  form:FormGroup;
  message;
  messageClass;
  processing = false;

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
      start_date:[''],
      end_date:[''],
      location:['']
		});
		
  }


  onConfigureRegisterSubmit(){
    const updated_event = {
      event_title: this.form.get('event_title').value, // E-mail input field
      host_username: this.form.get('host_username').value, // Username input field
      event_description: this.form.get('event_description').value, // Password input field
      start_date: this.form.get('start_date').value, // Password input field
      end_date: this.form.get('end_date').value, // Password input field
      location: this.form.get('location').value // Password input field
    }
    console.log(updated_event);
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this._id = params['_id'];
  });
    this.authService.getEvent(this._id).subscribe(event=>this.event=event);
  }


}
