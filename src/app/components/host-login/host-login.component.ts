import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HostAuthGuard } from '../../guards/host_auth.guard';

@Component({
  selector: 'app-host-login',
  templateUrl: './host-login.component.html',
  styleUrls: ['./host-login.component.css']
})
export class HostLoginComponent implements OnInit {
  form:FormGroup;
	message;
	messageClass;
  processing = false;
  previousUrl;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private HostAuthGuard: HostAuthGuard
  ) { 
    this.createForm();
  }
  createForm() {
    this.form = this.formBuilder.group({
      host_username: ['', Validators.required], // Username field
      host_password: ['', Validators.required] // Password field
    });
  }

  // Function to disable form
  disableForm() {
    this.form.controls['host_username'].disable(); // Disable username field
    this.form.controls['host_password'].disable(); // Disable password field
  }

  // Function to enable form
  enableForm() {
    this.form.controls['host_username'].enable(); // Enable username field
    this.form.controls['host_password'].enable(); // Enable password field
  }

  onHostLoginSubmit(){
    this.processing = true; // Used to submit button while is being processed
    this.disableForm(); // Disable form while being process
    // Create user object from user's input
    const host = {
      host_username: this.form.get('host_username').value, // Username input field
      host_password: this.form.get('host_password').value // Password input field
    }
    this.authService.host_login(host).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Set bootstrap error class
        this.message = data.message; // Set error message
        this.processing = false; // Enable submit button
        this.enableForm(); // Enable form for editting
      } else {
        this.messageClass = 'alert alert-success'; // Set bootstrap success class
        this.message = data.message; // Set success message
        // Function to store user's token in client local storage
        this.authService.storeHostData(data.token3, data.host);
        // After 2 seconds, redirect to dashboard page
        setTimeout(() => { 
          if (this.previousUrl) {
            this.router.navigate([this.previousUrl]); // Redirect to page they were trying to view before
          } else {
            this.router.navigate(['/host-dashboard']); // Navigate to dashboard view
          }
        }, 2000);
      }
    });
  }
  ngOnInit() {
    if (this.HostAuthGuard.redirectUrl) {
      this.messageClass = 'alert alert-danger'; // Set error message: need to login
      this.message = 'You must be logged in to view that page.'; // Set message
      this.previousUrl = this.HostAuthGuard.redirectUrl; // Set the previous URL user was redirected from
      this.HostAuthGuard.redirectUrl = undefined; // Erase previous URL
    }
  }

}
