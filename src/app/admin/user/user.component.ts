import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminLayDsNguoiDungService } from 'src/app/core/services/admin-lay-ds-nguoi-dung.service';
//ngx filter
import { FilterPipe } from 'ngx-filter-pipe';
import {map} from 'rxjs/operators'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  $danh_sach_nguoi_dung: any = [];
  p = 1;
  constructor(private apiAdminLDSND: AdminLayDsNguoiDungService, private filterPipe: FilterPipe) { }
  // ngOnDestroy(): void {
  //   // this.apiAdminLDSND.$dsNguoiDung.unsubscribe()

  //   throw new Error("Method not implemented.");

  // }
  //ng filter search
  $userFilter: any = { tuKhoa: '' };
  $kqTimKiem: any ;
  $checkRong: boolean = false;

  ngOnInit(): void {
    //gọi service 
    this.apiAdminLDSND.layDanhSachNguoiDung().subscribe();
    //getter accesor variable
    this.apiAdminLDSND.$dsNguoiDung.subscribe(
      {
        next: (res) => {
          this.$danh_sach_nguoi_dung = res;
          console.log(this.$danh_sach_nguoi_dung);
        }
      }
    )
  }
 
  onKey(giatri: any) {
    //test
    this.$userFilter.tuKhoa = giatri.target.value;
    //goi api dua tuKhoa vao
    let $tuKhoa = giatri.target.value;
    this.apiAdminLDSND.timKiemNguoiDung($tuKhoa).subscribe();
    this.apiAdminLDSND.$taiKhoan.subscribe(
      {
        next: (res) => {
          this.$kqTimKiem = res;             
          if(this.$kqTimKiem != undefined && this.$kqTimKiem != '') {
            this.$kqTimKiem = this.$kqTimKiem[0];
            this.$checkRong = true;
            console.log(this.$kqTimKiem);
          }      
           
        }
      }
    );
  }

}
