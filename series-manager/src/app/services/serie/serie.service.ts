import { Injectable } from '@angular/core';
import { Serie } from '../../models/Serie';

@Injectable({
  providedIn: 'root',
})
export class SerieService {
  seriesList: Serie[];

  constructor() {
    this.seriesList = [];

    for (let i = 0; i < 6; i++) {
      this.seriesList.push(
        new Serie(i, 'Name' + i, 'firstSeasonRelease' + i, 0 + i, 'description' + i, 'critic' + i, 'imgUrl' + i, 'review' + i)
      );
    }
  }

  // Functions used for Create, Edit and Delete Series //

  createSerie(serieToCreate: Serie): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      serieToCreate.id = this.seriesList[this.seriesList.length - 1].id + 1;
      this.seriesList.push(serieToCreate);
      resolve();
    });
  }

  editSerie(editedSerie: Serie): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      for (let [index, serie] of this.seriesList.entries()) {
        if (serie.id === editedSerie.id) {
          this.seriesList[index] = editedSerie;
          resolve();
          break;
        }
      }
    });
  }

  deleteSerie(serieIdToDelete: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      for (let [index, serie] of this.seriesList.entries()) {
        if (serie.id === serieIdToDelete) {
          this.seriesList.splice(index, 1);
          resolve();
          break;
        }
      }
    });
  }

  getSerieById(serieId: number): Promise<Serie> {
    return new Promise<Serie>((res, rej) => {
      for (let serie of this.seriesList) {
        if (serie.id === serieId) {
          res(serie);
          break;
        }
      }
    });
  }
}

