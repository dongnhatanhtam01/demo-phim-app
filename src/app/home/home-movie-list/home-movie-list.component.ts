import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GetMovieService } from '../../core/services/get-movie.service';
@Component({
  selector: 'app-home-movie-list',
  encapsulation: ViewEncapsulation.ShadowDom, 
  templateUrl: './home-movie-list.component.html',
  styleUrls: ['./home-movie-list.component.scss']
})
export class HomeMovieListComponent implements OnInit {
  _movieList$: Array<any> = [];
  constructor(private getMovieService: GetMovieService) { }

  ngOnInit(): void {
    this.getMovieService.getMovie().subscribe(data => {
      this._movieList$ = data;
    })
  }

}
