import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {Router,ActivatedRoute, Params,UrlTree} from '@angular/router';
import {Http} from '@angular/http';
import {GetTokenService} from '../../services/get-token.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events: any[]= new Array;
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
    }
    

}
