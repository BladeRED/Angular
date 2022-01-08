import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serie } from 'src/app/models/Serie';
import { SerieService } from 'src/app/services/serie/serie.service';

@Component({
  selector: 'app-serie-details',
  templateUrl: './serie-details.component.html',
  styleUrls: ['./serie-details.component.css']
})
export class SerieDetailsComponent implements OnInit {

  serie! : Serie

  constructor(private serieService: SerieService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.params['id'] ; //:id

    this.serieService.findSerieById(+id).then((serie: Serie) => {

      this.serie = serie;
      console.log(serie);
    })
  }

}
