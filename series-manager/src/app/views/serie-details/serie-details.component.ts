import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from 'src/app/models/Review';
import { Serie } from 'src/app/models/Serie';
import { SerieService } from 'src/app/services/serie/serie.service';

@Component({
  selector: 'app-serie-details',
  templateUrl: './serie-details.component.html',
  styleUrls: ['./serie-details.component.css']
})
export class SerieDetailsComponent implements OnInit {

  serie! : Serie
  seriesList!: Serie[]



  constructor(private serieService: SerieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    const id = this.route.snapshot.params['id'] ; //:id
    this.seriesList = this.serieService.seriesList;
    this.serieService.findSerieById(+id).then((serie: Serie) => {

      this.serie = serie;
      console.log(serie);

    })
  }

  onSubmitCreateReview(reviewToAdd: Review): void {
    this.serieService.createReview(reviewToAdd, this.serie).then(() => {this.router.navigateByUrl('/series')})
    console.log(reviewToAdd)
      }

}
