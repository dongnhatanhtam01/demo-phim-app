import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, Observable, throwError, from } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminLayDsNguoiDungService {
  private _danhSachNguoiDung: any = new BehaviorSubject([]);
  public $dsNguoiDung = this._danhSachNguoiDung.asObservable();

  constructor(private apiService: ApiService) { }

  //viet api lay danh sach nguoi dung
  layDanhSachNguoiDung = (): Observable<any> => {
    return this.apiService.getAPI('QuanLyNguoiDung/LayDanhSachNguoiDung','').pipe(
      tap(
        (res) => {
          this._danhSachNguoiDung.next(res)
        }
      )
    );
  }

  //Tim Nguoi Dung tuKhoa: theo ten
  private _taiKhoanNguoiDung: any = new BehaviorSubject('');
  public $taiKhoan: any = this._taiKhoanNguoiDung.asObservable();
  timKiemNguoiDung = (taiKhoan: string):Observable<any> => {
    let $param = new HttpParams;
    $param = $param.append('tuKhoa', taiKhoan);
    $param = $param.append('maNhom', 'GP01');

    return this.apiService.getAPI('QuanLyNguoiDung/LayDanhSachNguoiDung', {
      params: $param
    }).pipe(
      tap(
        (res) => {
          this._taiKhoanNguoiDung.next(res);
        }
      )
    )
  }
}
