import { Component, OnInit, ViewEncapsulation, ElementRef, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { GetMovieService } from '../../core/services/get-movie.service';

@Component({
  selector: 'app-home-movie-detail',
  encapsulation: ViewEncapsulation.ShadowDom,
  templateUrl: './home-movie-detail.component.html',
  styleUrls: ['./home-movie-detail.component.scss']
})
export class HomeMovieDetailComponent implements OnInit {
  data: any;
  constructor(private activatedRouted: ActivatedRoute, private getMovie: GetMovieService, private renderer: Renderer2, 
    private elmRef: ElementRef, private san: DomSanitizer) {
  }

  ngOnInit(): void {
    this.activatedRouted.params.subscribe(param => this.getMovie.getMovieDetail(param.maPhim).subscribe(data => {
      this.data = data; console.log(data);
      this.renderer.setStyle(this.elmRef.nativeElement,'background-image', `url(${data.hinhAnh})`)
      const bg = this.san.bypassSecurityTrustStyle(`url(${data.hinhAnh})`)
      this.renderer.setStyle(
        this.elmRef.nativeElement, 
        'background-image', 
        bg
      ) 
    }
    ))
  }

  // loopIt 
  
  

}
