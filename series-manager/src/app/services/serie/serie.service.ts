import { Injectable } from '@angular/core';
import { Serie } from '../../models/Serie';
import { Review } from '../../models/Review';

@Injectable({
  providedIn: 'root',
})
export class SerieService {
  seriesList: Serie[];
  datalist! : Review[];

  constructor() {
    this.seriesList = [];

      this.seriesList.push(
        new Serie(  1,
          'The Witcher',
          '20/12/2019',
          2,
          'Le sorceleur Geralt, un chasseur de monstres mutant, se bat pour trouver sa place dans un monde où les humains se révèlent souvent plus vicieux que les bêtes.',
          "Il est difficile d'entrer dans The Witcher, entre les noms fantaisistes étranges, la structure de l'histoire hasardeuse et une trame de fond compliquée. C'est beaucoup à avaler d'un coup. Mais on finit par se laisser avoir et par vouloir en savoir plus sur la suite. Si vous avez envie de vous laisser séduire, n'hésitez pas.",
          'https://fr.web.img6.acsta.net/pictures/19/12/12/12/13/2421997.jpg',
          this.datalist,),
          new Serie(  2,
            'Couille Académie',
            '16/10/2020',
            2,
            'Le sorceleur Geralt, un chasseur de monstres mutant, se bat pour trouver sa place dans un monde où les humains se révèlent souvent plus vicieux que les bêtes.',
            "Il est difficile d'entrer dans The Witcher, entre les noms fantaisistes étranges, la structure de l'histoire hasardeuse et une trame de fond compliquée. C'est beaucoup à avaler d'un coup. Mais on finit par se laisser avoir et par vouloir en savoir plus sur la suite. Si vous avez envie de vous laisser séduire, n'hésitez pas.",
            'https://fr.web.img6.acsta.net/pictures/19/12/12/12/13/2421997.jpg',
            this.datalist,)
        /*
        new Serie(
          i,
          this.datalist[i],
          'firstSeasonRelease' + i,
          0 + i,
          'description' + i,
          'critic' + i,
          'imgUrl' + i,
          'review' + i
        )
        */
      );
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
