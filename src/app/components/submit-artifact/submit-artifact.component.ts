import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
@Component({
  selector: 'app-submit-artifact',
  templateUrl: './submit-artifact.component.html',
  styleUrls: ['./submit-artifact.component.css']
})
export class SubmitArtifactComponent implements OnInit {
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
 
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
  public uploader:FileUploader = new FileUploader({url:'http://localhost:8080/upload/'});
  ngOnInit() {
  }

}
