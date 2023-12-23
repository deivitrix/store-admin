import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  private url:string;

  constructor( private http: HttpClient) {
    this.url=environment.url+'imagen/'
  }

  getimagen(path:string){
    const endpoint: string = this.url +path;
     return this.http.get<any>(endpoint);
  }

  updloadFile(data:any){
    const endpoint: string = this.url +'upload';
    return this.http.post<any>(endpoint,data);
  }
}
