import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-evaluator-register',
  templateUrl: './evaluator-register.component.html',
  styleUrls: ['./evaluator-register.component.css']
})
export class EvaluatorRegisterComponent implements OnInit {
  form:FormGroup;
  message;
  messageClass;
  processing = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.createForm();
   }
   createForm(){
		this.form = this.formBuilder.group({
      evaluator_email: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(3), // Minimum length is 5 characters
        Validators.maxLength(30), // Maximum length is 30 characters
		    this.validateEmail // Custom validation
      ])],
      // Username Input
      evaluator_username: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(1), // Minimum length is 3 characters
        Validators.maxLength(15), // Maximum length is 15 characters
	    	this.validateUsername // Custom validation
      ])],
      // Password Input
      evaluator_password: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(1), // Minimum length is 8 characters
        Validators.maxLength(35), // Maximum length is 35 characters
      ])],
      // Confirm Password Input
      evaluator_confirm: ['', Validators.required] // Field is required	 
		}, { validator: this.matchingPasswords('evaluator_password', 'evaluator_confirm') });
		
  }

   disableForm() {
    this.form.controls['evaluator_email'].disable();
    this.form.controls['evaluator_username'].disable();
    this.form.controls['evaluator_password'].disable();
    this.form.controls['evaluator_confirm'].disable();
  }

  // Function to enable the registration form
  enableForm() {
    this.form.controls['evaluator_email'].enable();
    this.form.controls['evaluator_username'].enable();
    this.form.controls['evaluator_password'].enable();
    this.form.controls['evaluator_confirm'].enable();
  }
  
  validateEmail(controls) {
    // Create a regular expression
    const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    // Test email against regular expression
    if (regExp.test(controls.value)) {
      return null; // Return as valid email
    } else {
      return { 'validateEmail': true } // Return as invalid email
    }
  }
  
   // Function to validate username is proper format
  validateUsername(controls) {
    // Create a regular expression
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    // Test username against regular expression
    if (regExp.test(controls.value)) {
      return null; // Return as valid username
    } else {
      return { 'validateUsername': true } // Return as invalid username
    }
  }
  
  // Funciton to ensure passwords match
  matchingPasswords(evaluator_password, evaluator_confirm) {
    return (group: FormGroup) => {
      // Check if both fields are the same
      if (group.controls[evaluator_password].value === group.controls[evaluator_confirm].value) {
        return null; // Return as a match
      } else {
        return { 'matchingPasswords': true } // Return as error: do not match
      }
    }
  }

	onEvaluatorRegisterSubmit(){
    console.log(this.form.value);
    const evaluator = {
      evaluator_email: this.form.get('evaluator_email').value, // E-mail input field
      evaluator_username: this.form.get('evaluator_username').value, // Username input field
      evaluator_password: this.form.get('evaluator_password').value // Password input field
    }

    this.authService.registerEvaluator(evaluator).subscribe(data => {
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
