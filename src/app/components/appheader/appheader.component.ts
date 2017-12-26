import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})
export class AppheaderComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router
    ) 
    { }
  
    // Function to logout user
    onLogoutClick() {
      this.authService.logout(); // Logout user
      this.router.navigate(['/login']); // Navigate back to home page
    }
    
    onAdminLogoutClick() {
      this.authService.adminLogout(); // Logout user
      this.router.navigate(['/admin-login']); // Navigate back to home page
    }
    onHostLogoutClick() {
      this.authService.hostLogout(); // Logout user
      this.router.navigate(['/host-login']); // Navigate back to home page
    }
    onEvaluatorLogoutClick() {
      this.authService.evaluatorLogout(); // Logout user
      this.router.navigate(['/evaluator-login']); // Navigate back to home page
    }
    
  
    ngOnInit() {
    }
  

}
