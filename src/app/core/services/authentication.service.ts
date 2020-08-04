import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { tap, catchError } from 'rxjs/operators';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _userSubject = new BehaviorSubject({});
  public $user = this._userSubject.asObservable();

  constructor(private apiService: ApiService, private router: Router) { }

  initUser = () => {
    const userLogin = localStorage.getItem('userLogin');
    if(userLogin){
      this._userSubject.next(JSON.parse(userLogin));
    }
  }
  dangKy = (values): Observable<any> => {
    const data = { ...values, maNhom: 'GP01' };
    return this.apiService.postAPI('QuanLyNguoiDung/DangKy', data).pipe(
      tap((res) => {
        this.router.navigate(['/'])
      })
    );
  }
  dangNhap = (values: any): Observable<any> => {
    return this.apiService.postAPI('QuanLyNguoiDung/DangNhap', values).pipe(
      tap((res) => {

        if (res.maLoaiNguoiDung === 'QuanTri') {
          this.router.navigate(['/admin']);
        } else { this.router.navigate(['/']) }

        this._userSubject.next(res);
        localStorage.setItem('userLogin',JSON.stringify(res));
      })
    );
  }
}
