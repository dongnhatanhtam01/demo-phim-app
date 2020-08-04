import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup;
  constructor(private auth: AuthenticationService) {
    this.signInForm = new FormGroup({
      taiKhoan: new FormControl('',[Validators.required]),
      matKhau: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ])
    });
   }

  ngOnInit(): void {
  }
  dangNhap() { 
    this.signInForm.markAllAsTouched();
    if(this.signInForm.invalid) return;
    
    this.auth.dangNhap(this.signInForm.value).subscribe({
      next: (res) => console.log(res)
    })
  }
}
