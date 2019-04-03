import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  uploadFile(formData) {
    let urlAPI = 'http://localhost:3000/api/upload';
    return this.http.post(urlAPI, formData);
  }

}
