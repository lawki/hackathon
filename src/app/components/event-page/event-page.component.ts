import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { ActivatedRoute, Params,Router } from "@angular/router";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {
  _id: any;
  event: any = {};
  i: any;
  x: any;
  team: any = {};
  isRegistered: Boolean = false;
  evaluators: any[] = new Array;

  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
  myurl: any='http://localhost:8080/authentication/upload/';
  files: any[]= new Array;
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
  
  public uploader:FileUploader = new FileUploader({url: this.myurl });

  constructor(
    private authService: AuthService, 
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit() {
      this.x = this.route.snapshot.data['event'];
      if (this.x == null) {
          this.isRegistered = false;
      } else {
          this.isRegistered = true;
      }

      this.route.params.forEach((params: Params) => {
          this._id = params['_id'];
      });
      this.authService.getEvent(this._id).subscribe(data => {
          this.event = data.event;
          for (this.i = 0; this.i < this.event.evaluators_array.length; this.i++) {
              this.evaluators[this.i] = this.event.evaluators_array[this.i];
          }

      });

      this.authService.getTeam(JSON.parse(localStorage.getItem('user')).username, this._id).subscribe(team => {
          this.team = team;
          this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
            form.append('_id' , this.team._id);
            form.append('username', JSON.parse(localStorage.getItem('user')).username);
           };
           this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
            console.log("ImageUpload:uploaded:", item, status);
            this.router.navigate(['/profile']);
           };
           this.authService.getUserTeamwiseSubmissions(this.team._id).subscribe(files=>
            {
              this.files=files;
            });
      });




  }

}