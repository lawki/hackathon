import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class HostAuthGuard implements CanActivate {

  redirectUrl;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  // Function to check if user is authorized to view route
  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    // Check if user is logge din
    if (this.authService.hostLoggedIn()) {
      return true; // Return true: User is allowed to view route
    } else {
      this.authService.logout();
      this.redirectUrl = state.url; // Grab previous urul
      this.router.navigate(['/host-login']); // Return error and route to login page
      return false; // Return false: user not authorized to view page
    }
  }
}
