import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AdminAuthGuard } from '../../guards/admin_auth.guard';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  form:FormGroup;
	message;
	messageClass;
  processing = false;
  previousUrl;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private AdminAuthGuard: AdminAuthGuard
  ) { 
    this.createForm();
  }
  createForm() {
    this.form = this.formBuilder.group({
      admin_username: ['', Validators.required], // Username field
      admin_password: ['', Validators.required] // Password field
    });
  }

  // Function to disable form
  disableForm() {
    this.form.controls['admin_username'].disable(); // Disable username field
    this.form.controls['admin_password'].disable(); // Disable password field
  }

  // Function to enable form
  enableForm() {
    this.form.controls['admin_username'].enable(); // Enable username field
    this.form.controls['admin_password'].enable(); // Enable password field
  }

  onAdminLoginSubmit(){
    this.processing = true; // Used to submit button while is being processed
    this.disableForm(); // Disable form while being process
    // Create user object from user's input
    const admin = {
      admin_username: this.form.get('admin_username').value, // Username input field
      admin_password: this.form.get('admin_password').value // Password input field
    }
    this.authService.admin_login(admin).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Set bootstrap error class
        this.message = data.message; // Set error message
        this.processing = false; // Enable submit button
        this.enableForm(); // Enable form for editting
      } else {
        this.messageClass = 'alert alert-success'; // Set bootstrap success class
        this.message = data.message; // Set success message
        // Function to store user's token in client local storage
        this.authService.storeAdminData(data.token2, data.admin);
        // After 2 seconds, redirect to dashboard page
        setTimeout(() => { 
          if (this.previousUrl) {
            this.router.navigate([this.previousUrl]); // Redirect to page they were trying to view before
          } else {
            this.router.navigate(['/admin-dashboard']); // Navigate to dashboard view
          }
        }, 2000);
      }
    });
  }
  ngOnInit() {
    if (this.AdminAuthGuard.redirectUrl) {
      this.messageClass = 'alert alert-danger'; // Set error message: need to login
      this.message = 'You must be logged in to view that page.'; // Set message
      this.previousUrl = this.AdminAuthGuard.redirectUrl; // Set the previous URL user was redirected from
      this.AdminAuthGuard.redirectUrl = undefined; // Erase previous URL
    }
  }

}
