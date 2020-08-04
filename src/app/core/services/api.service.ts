import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL = 'http://movie0706.cybersoft.edu.vn/api';
  constructor(private http: HttpClient) { }
  handleError = (err) => {
    switch (err) {
      case 400:
        console.log('khong co api...');
        break;
      case 500:
        console.log('loi may chu...');
        break;
      case 401:
        console.log('authentification');
        break;
      default:
        console.log('on going your project...');
        break;
    }
    //nem err ra component
    return throwError(err);
  }
  getAPI = (path: string, option?: any):Observable<any> => {
    return this.http.get(`${this.BASE_URL}/${path}`,option)
    .pipe(catchError(this.handleError))
  }
  postAPI = (path: string,body: any, option?: any):Observable<any> => {
    return this.http.post(`${this.BASE_URL}/${path}`,body,option)
    .pipe(catchError(this.handleError))
  }
  putAPI = (path: string,body: any, option?: any):Observable<any> => {
    return this.http.put(`${this.BASE_URL}/${path}`,body,option)
    .pipe(catchError(this.handleError))
  }
  deleteAPI = (path: string, option?: any):Observable<any> => {
    return this.http.delete(`${this.BASE_URL}/${path}`,option)
    .pipe(catchError(this.handleError))
  }
}
