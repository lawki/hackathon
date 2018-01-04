import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable()
export class EventResolve implements Resolve<any> {
  
  constructor(private authService: AuthService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.authService.checkRegistration(JSON.parse(localStorage.getItem('user')).username,route.params['_id']);
  }

}