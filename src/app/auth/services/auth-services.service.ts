import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';



@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {
  private url:string;

  constructor( private http: HttpClient) {
    this.url=environment.url+'user/'
  }

  public login(data:any)
  {
    const endpoint: string = this.url + 'login';
    return this.http.post<any>(endpoint, data);
  }
}
