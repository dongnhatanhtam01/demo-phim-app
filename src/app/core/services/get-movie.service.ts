import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, throwError, from, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetMovieService {
  //oop encapsulation - data hinding
  private movieListSubj: any = new BehaviorSubject([]);
  public movieL = this.movieListSubj.asObservable();

  constructor(private apiService: ApiService) { }

  getMovie = (): Observable<any> => {
    return this.apiService.getAPI('QuanLyPhim/LayDanhSachPhim', '').pipe(
      tap(
        (res) => {
          // tạo biến publish ở chế độ chờ subscribe 
          this.movieListSubj.next(res);
        })
    );
  }
  getMovieDetail = (maPhim: string): Observable<any> => {
    let _params$ = new HttpParams;
    _params$ = _params$.append('maPhim', maPhim);
    _params$ = _params$.append('maNhom', 'GP01');
    return this.apiService.getAPI(`QuanLyPhim/LayThongTinPhim`, {
      params: _params$
    })
  }
}
