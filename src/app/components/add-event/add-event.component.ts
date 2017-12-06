import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  form:FormGroup;
  message;
  messageClass;
  processing = false;
  hosts: string[];
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { 
    this.createForm();
  }

  createForm(){
		this.form = this.formBuilder.group({
      event_title: ['',Validators.required],
      // Username Input
      host_username: ['',Validators.required],
      // Password Input
      event_description: [''],
      // Confirm Password Input
		});
		
  }

  disableForm() {
    this.form.controls['event_title'].disable();
    this.form.controls['host_username'].disable();
    this.form.controls['event_description'].disable();
  }

  // Function to enable the registration form
  enableForm() {
    this.form.controls['event_title'].enable();
    this.form.controls['host_username'].enable();
    this.form.controls['event_description'].enable();
  }

  onEventRegisterSubmit(){
    console.log(this.form.value);
    const event = {
      event_title: this.form.get('event_title').value, // E-mail input field
      host_username: this.form.get('host_username').value, // Username input field
      event_description: this.form.get('event_description').value // Password input field
    }

    this.authService.registerEvent(event).subscribe(data => {
      console.log(data);
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Set an error class
        this.message = data.message; // Set an error message
		    this.processing = false; // Re-enable submit button
        this.enableForm(); // Re-enable form
      } else {
        this.messageClass = 'alert alert-success'; // Set a success class
        this.message = data.message; // Set a success message
		// After 2 second timeout, navigate to the login page
		    setTimeout(() => {
          this.router.navigate(['/admin-dashboard']); // Redirect to login view
        }, 500);
      }
      
    });
  }
  ngOnInit() {
  }

}
