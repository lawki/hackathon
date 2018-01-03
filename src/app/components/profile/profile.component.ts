import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {Router,ActivatedRoute, Params,UrlTree} from '@angular/router';
import {Http} from '@angular/http';
import {GetTokenService} from '../../services/get-token.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  events: any[]= new Array;
  teams: any[]= new Array;
  accessToken:any=null;
  accessResponse:any=null;
  params:any;

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private authService: AuthService,
    private tokenService:GetTokenService
  ) { }

  ngOnInit() {
    
    
        this.authService.getEvents().subscribe(data => {
            this.events = data.events
        });
        this.authService.getTeams(JSON.parse(localStorage.getItem('user')).username).subscribe(teams => this.teams = teams);
    }
    
    }