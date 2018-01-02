import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { ActivatedRoute, Params,Router } from "@angular/router";
@Component({
  selector: 'app-submit-artifact',
  templateUrl: './submit-artifact.component.html',
  styleUrls: ['./submit-artifact.component.css']
})
export class SubmitArtifactComponent implements OnInit {
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
  _id: any;
  myurl: any='http://localhost:8080/authentication/upload/';
 
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
  
  public uploader:FileUploader = new FileUploader({url: this.myurl });
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    ) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this._id = params['_id'];
    });
    this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
      form.append('_id' , this._id);
      form.append('username', JSON.parse(localStorage.getItem('user')).username);
     };
     this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      console.log("ImageUpload:uploaded:", item, status);
      this.router.navigate(['/profile']);
  };
  }

}
