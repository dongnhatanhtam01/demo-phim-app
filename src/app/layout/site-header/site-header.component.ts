import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {
  userLogo: any = '';
  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.auth.$user.subscribe({
      next: (res) => {
        this.userLogo = res;
        console.log(this.userLogo);
      }
    })
  }

}
