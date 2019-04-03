import { Component, OnInit } from '@angular/core';
import { UploadService} from '../../services/upload.service';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  uploadedFiles: Array < File > ;
  constructor(private serviceUpload: UploadService) {}

  ngOnInit() {}

  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }
  
  upload() {
    let formData = new FormData();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
    }
    this.serviceUpload.uploadFile(formData).subscribe((res)=> {
      console.log('response received is ', res);
    });
    }
}
