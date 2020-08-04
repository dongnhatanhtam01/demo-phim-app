import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @ViewChild('signinForm') signinForm: HTMLFormElement;

  //vi du
  // values: object = {
  //   "taiKhoan": "tamdna0002",
  //   "matKhau": "tamdna0002",
  //   "email": "tamdna0002@sadsad.com",
  //   "soDt": "123123123",
  //   "maNhom": "GP02",
  //   "maLoaiNguoiDung": "KhachHang",
  //   "hoTen": "tamdna0002"
  // }

  constructor(private auth: AuthenticationService,private router: Router) { }

  ngOnInit(): void {
    // this.dangKy(this.values)
  }
  dangKy(values: any){
    console.log(values);
    this.auth.dangKy(values).subscribe(
      (res)=> {
        console.log(res);
        confirm("Đăng ký thành công!");
      }
    );
  }
  dangNhap() {
    this.router.navigate(['/signin'])
  }
  canDeactive() {
    return this.signinForm.dirty;
  }
}
