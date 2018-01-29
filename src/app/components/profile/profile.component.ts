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

  

  constructor(
  ) { }

  ngOnInit() {
    }
    
    }