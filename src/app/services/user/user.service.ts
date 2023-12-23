import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string;

  constructor( private http: HttpClient) {
    this.url=environment.url+'user/'
  }

  public userOne(id:string)
  {
    const endpoint: string = this.url +id ;
    return this.http.get<any>(endpoint);
  }

}
