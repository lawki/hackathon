import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  domain = "http://localhost:8080/";
  authToken;
  authToken2;
  user;
  options;

  constructor( private http: Http) { }

   // Function to create headers, add token, to be used in HTTP requests
  createAuthenticationHeaders() {
    this.loadToken(); // Get token so it can be attached to headers
    // Headers configuration options
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json', // Format set to JSON
        'authorization': this.authToken // Attach token
      })
    });
  }
  // Function to get token from client local storage
  loadToken() {
    this.authToken = localStorage.getItem('token');; // Get token and asssign to variable to be used elsewhere
  }
   // Function to get user's profile data
  getProfile() {
    this.createAuthenticationHeaders(); // Create headers before sending to API
    return this.http.get(this.domain + 'authentication/profile', this.options).map(res => res.json());
  }

  
  getUsers() {
   return this.http.get(this.domain + 'authentication/dashboard').map(res => res.json());
  }
  
  deleteUser(_id: any) {
    return this.http.delete(this.domain + 'authentication/delete_user/' + _id).map(res => res.json());
  }
  
  
  storeAdminData(token2, admin) {
    localStorage.setItem('token2', token2); // Set token in local storage
    localStorage.setItem('admin', JSON.stringify(admin)); // Set user in local storage as string
  }
  adminLoggedIn() {
    return tokenNotExpired('token2');
  }
  admin_login(admin) {
    return this.http.post(this.domain + 'authentication/admin_login', admin).map(res => res.json());
  }
  adminLogout() {
    localStorage.clear();
  }


  storeHostData(token3, host) {
    localStorage.setItem('token3', token3); // Set token in local storage
    localStorage.setItem('host', JSON.stringify(host)); // Set user in local storage as string
  }
  hostLoggedIn() {
    return tokenNotExpired('token3');
  }
  registerHost(host) {
    return this.http.post(this.domain + 'authentication/host_register', host).map(res => res.json());
  }
  
  host_login(host) {
    return this.http.post(this.domain + 'authentication/host_login', host).map(res => res.json());
  }
  hostLogout() {
    localStorage.clear();
  }


  storeEvaluatorData(token4, evaluator) {
    localStorage.setItem('token4', token4); // Set token in local storage
    localStorage.setItem('evaluator', JSON.stringify(evaluator)); // Set user in local storage as string
  }
  evaluatorLoggedIn() {
    return tokenNotExpired('token4');
  }
  registerEvaluator(evaluator) {
    return this.http.post(this.domain + 'authentication/evaluator_register', evaluator).map(res => res.json());
  }
  evaluator_login(evaluator) {
    return this.http.post(this.domain + 'authentication/evaluator_login', evaluator).map(res => res.json());
  }
  evaluatorLogout() {
    localStorage.clear();
  }


  registerEvent(event) {
    return this.http.post(this.domain + 'authentication/add-event', event).map(res => res.json());
  }
  getEvents() {
    return this.http.get(this.domain + 'authentication/events').map(res => res.json());
   }
   getEvent(_id:any) {
    return this.http.get(this.domain + 'authentication/events/'+ _id).map(res => res.json());
   }
   updateEvent(updatedEvent:any) {
    var body={
      event_title: updatedEvent.event_title,
      host_username: updatedEvent.host_username,
      event_description: updatedEvent.event_description,
      start: updatedEvent.start,
      end: updatedEvent.end,
      location: updatedEvent.location,
      _id: updatedEvent._id,
      max_team_members: updatedEvent.max_team_members,
      max_ideas: updatedEvent.max_ideas,
      prize: updatedEvent.prize,
      publish: updatedEvent.publish,
      evaluator_username: updatedEvent.evaluator_username
    };
    console.log(body);
    return this.http.put(this.domain + 'authentication/update-event/'+ body._id,body);
   }
   getHostEvents(host_username: any) {
    return this.http.get(this.domain + 'authentication/get_host_events/'+ host_username).map(res => res.json());
   }
   

   deleteEvent(_id: any) {
    return this.http.delete(this.domain + 'authentication/delete_event/' + _id).map(res => res.json());
  }
  
  getHosts() {
    return this.http.get(this.domain + 'authentication/hosts').map(res => res.json());
   }

   getEvaluators() {
    return this.http.get(this.domain + 'authentication/evaluators').map(res => res.json());
   }
   deleteHost(_id: any) {
    return this.http.delete(this.domain + 'authentication/delete_host/' + _id).map(res => res.json());
  }
  

  
  
  // Function to register user accounts
  registerUser(user) {
    return this.http.post(this.domain + 'authentication/register', user).map(res => res.json());
  }
  
   // Function to login user
  login(user) {
    return this.http.post(this.domain + 'authentication/login', user).map(res => res.json());
  }
  // Function to check if user is logged in
  loggedIn() {
    return tokenNotExpired();
  }
  // Function to store user's data in client local storage
  storeUserData(token, user) {
    localStorage.setItem('token', token); // Set token in local storage
    localStorage.setItem('user', JSON.stringify(user)); // Set user in local storage as string
    this.authToken = token; // Assign token to be used elsewhere
    this.user = user; // Set user to be used elsewhere
  }
  // Function to logout
  logout() {
    this.authToken = null; // Set token to null
    this.user = null; // Set user to null
    localStorage.clear(); // Clear local storage
  }

  

}
