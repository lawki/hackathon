import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { EvaluatorAuthGuard } from '../../guards/evaluator_auth.guard';

@Component({
  selector: 'app-evaluator-login',
  templateUrl: './evaluator-login.component.html',
  styleUrls: ['./evaluator-login.component.css']
})
export class EvaluatorLoginComponent implements OnInit {
  form:FormGroup;
	message;
	messageClass;
  processing = false;
  previousUrl;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private EvaluatorAuthGuard: EvaluatorAuthGuard
  ) { 
    this.createForm();
  }
  createForm() {
    this.form = this.formBuilder.group({
      evaluator_username: ['', Validators.required], // Username field
      evaluator_password: ['', Validators.required] // Password field
    });
  }

  // Function to disable form
  disableForm() {
    this.form.controls['evaluator_username'].disable(); // Disable username field
    this.form.controls['evaluator_password'].disable(); // Disable password field
  }

  // Function to enable form
  enableForm() {
    this.form.controls['evaluator_username'].enable(); // Enable username field
    this.form.controls['evaluator_password'].enable(); // Enable password field
  }

  onEvaluatorLoginSubmit(){
    this.processing = true; // Used to submit button while is being processed
    this.disableForm(); // Disable form while being process
    // Create user object from user's input
    const evaluator = {
      evaluator_username: this.form.get('evaluator_username').value, // Username input field
      evaluator_password: this.form.get('evaluator_password').value // Password input field
    }
    this.authService.evaluator_login(evaluator).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Set bootstrap error class
        this.message = data.message; // Set error message
        this.processing = false; // Enable submit button
        this.enableForm(); // Enable form for editting
      } else {
        this.messageClass = 'alert alert-success'; // Set bootstrap success class
        this.message = data.message; // Set success message
        // Function to store user's token in client local storage
        this.authService.storeEvaluatorData(data.token4, data.evaluator);
        // After 2 seconds, redirect to dashboard page
        setTimeout(() => { 
          if (this.previousUrl) {
            this.router.navigate([this.previousUrl]); // Redirect to page they were trying to view before
          } else {
            this.router.navigate(['/evaluator-dashboard']); // Navigate to dashboard view
          }
        }, 2000);
      }
    });
  }
  ngOnInit() {
    if (this.EvaluatorAuthGuard.redirectUrl) {
      this.messageClass = 'alert alert-danger'; // Set error message: need to login
      this.message = 'You must be logged in to view that page.'; // Set message
      this.previousUrl = this.EvaluatorAuthGuard.redirectUrl; // Set the previous URL user was redirected from
      this.EvaluatorAuthGuard.redirectUrl = undefined; // Erase previous URL
    }
  }

}
