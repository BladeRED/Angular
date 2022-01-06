import { Injectable } from '@angular/core';
import { Serie } from '../../models/Serie';

@Injectable({
  providedIn: 'root',
})
export class SerieService {
  seriesList: Serie[];
  datalist = [{id: 1, name: 'The Witcher', firstSeasonRelease: '20/12/2019'}, {}, {}, {}, {}, {}, {}]
  ;

  constructor() {
    this.seriesList = [];

    for (let i = 0; i < 5; i++) {
      this.seriesList.push(
        new Serie(  i,
          'The Witcher',
          '20/12/2019',
          2,
          'Le sorceleur Geralt, un chasseur de monstres mutant, se bat pour trouver sa place dans un monde où les humains se révèlent souvent plus vicieux que les bêtes.',
          "Il est difficile d'entrer dans The Witcher, entre les noms fantaisistes étranges, la structure de l'histoire hasardeuse et une trame de fond compliquée. C'est beaucoup à avaler d'un coup. Mais on finit par se laisser avoir et par vouloir en savoir plus sur la suite. Si vous avez envie de vous laisser séduire, n'hésitez pas.",
          'https://fr.web.img6.acsta.net/pictures/19/12/12/12/13/2421997.jpg',
          "Pas lecteur, mais joueur, je retrouve ici mes personnages adorés que j'ai parfois du mal à reconnaître tant l'image des jeux est parfois un peu loin du physique des acteurs live, mais bon, une fois passé ce petit 'problème', on prend plaisir à arpenter les contrées avec le sorceleur.",),
          new Serie(  i,
            'Couille Académie',
            '16/10/2020',
            2,
            'Le sorceleur Geralt, un chasseur de monstres mutant, se bat pour trouver sa place dans un monde où les humains se révèlent souvent plus vicieux que les bêtes.',
            "Il est difficile d'entrer dans The Witcher, entre les noms fantaisistes étranges, la structure de l'histoire hasardeuse et une trame de fond compliquée. C'est beaucoup à avaler d'un coup. Mais on finit par se laisser avoir et par vouloir en savoir plus sur la suite. Si vous avez envie de vous laisser séduire, n'hésitez pas.",
            'https://fr.web.img6.acsta.net/pictures/19/12/12/12/13/2421997.jpg',
            "Pas lecteur, mais joueur, je retrouve ici mes personnages adorés que j'ai parfois du mal à reconnaître tant l'image des jeux est parfois un peu loin du physique des acteurs live, mais bon, une fois passé ce petit 'problème', on prend plaisir à arpenter les contrées avec le sorceleur.",)
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
