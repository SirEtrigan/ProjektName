import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeatureImageService {

  private _imgur_url:string = 'https://api.imgur.com/3/image';
  private _client_id:string = 'a4e35b6a4c69230';
  constructor(private http:HttpClient) { }

  upload_image(image_file:File){
    let formData = new FormData;
    formData.append('image',image_file, image_file.name);


    let headers = new HttpHeaders({
      "auth:": 'Client-ID '+this._client_id
    });

    return this.http.post(this._imgur_url, formData, {headers:headers})
  }
}
