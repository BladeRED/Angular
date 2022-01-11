import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/Serie';
import { SerieService } from '../../services/serie/serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css'],
})
export class SerieListComponent implements OnInit {
  seriesList!: Serie[];

  constructor(private serieService: SerieService) {}

  ngOnInit(): void {
    this.seriesList = this.serieService.seriesList;
    console.log(this.seriesList);
  }

  onClickDeleteSerie(arrayIndex: number): void {
    this.serieService
      .deleteSerie(this.seriesList[arrayIndex].id)
      .then(() => {});
  }
}
