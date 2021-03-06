import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const userLogin = localStorage.getItem('userLogin');
    const userLoginData = JSON.parse(userLogin);

    if(userLoginData){
      if(userLoginData.maLoaiNguoiDung==='QuanTri') {
        return true
      }
      this.router.navigate(['/'])
      return false
    }
    this.router.navigate(['/signin']);
    return false;
  }
  
}
