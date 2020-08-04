import { Component, OnInit, EventEmitter } from '@angular/core';
import { GetMovieService } from 'src/app/core/services/get-movie.service';
import {PagerComponent} from './pager/pager.component';
import { PageDemoService } from 'src/app/core/services/page-demo.service';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  hinhAnh: any;
  movieList: any = [];
  p = 1;
  constructor(private movieService: GetMovieService) {

  } 


  ngOnInit(): void {
    //gọi service LayDanhSachPhim ra
    this.movieService.getMovie().subscribe();
    //thông qua getter lấy data từ class
    this.movieService.movieL.subscribe(
      //gán giá trị từ obsevable cho biến của component Phim
      {
        next: (result) => {
          this.movieList = result; 
          console.log(this.movieList);
        }
      }
    );
  }
 

}
