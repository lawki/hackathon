import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {Router,ActivatedRoute, Params,UrlTree} from '@angular/router';
import {Http} from '@angular/http';
import {GetTokenService} from '../../services/get-token.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  accessToken:any=null;
  accessResponse:any=null;
  params:any;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private authService: AuthService,private tokenService:GetTokenService) {}  

  ngOnInit() {
    
      this.activatedRoute.queryParams.subscribe((params:any)=>{
        this.params = params;
        console.log("Route Params: "+JSON.stringify(this.params));
      });
      if(this.params==null)
        return ;
      if(this.params.error)
      {
        console.log("ERROR: "+this.params.error_description);
        return;
      }
      else{
        this.tokenService.getToken(this.params.code).subscribe((success)=>
            {
              this.authService.storeLinkedInData(success.json().myToken, success.json().message, success.json().user);
              
              console.log(success.json());
              this.router.navigate(['/home']);
            },
            error=>{console.log("ERROR: "+error);return});
      }
      if(this.accessResponse!=null)
      {
        console.log(this.accessResponse.accessToken);
      }
  }

}
