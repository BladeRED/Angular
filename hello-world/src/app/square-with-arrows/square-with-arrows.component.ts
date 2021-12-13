import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square-with-arrows',
  templateUrl: './square-with-arrows.component.html',
  styleUrls: ['./square-with-arrows.component.css'],
})
export class SquareWithArrowsComponent implements OnInit {
  squareStyles: any;

  constructor() {
    this.squareStyles = {
      position: 'relative',
      width: '250px',
      height: '250px',
      backgroundColor: 'red',
      top: '0px',
      left: '0px',
    };

    let i = 0;
    const squareInit = setInterval(() => {
      this.squareStyles.top = parseInt(this.squareStyles.top) + 1 + 'px';
      this.squareStyles.left = parseInt(this.squareStyles.left) + 1 + 'px';i++;
        if (i === 250){

          clearInterval(squareInit);

        }


    }, 10)

  }

  ngOnInit(): void {}

  move(to: string) {
    switch (to) {
      case 'left':
        this.squareStyles.left = parseInt(this.squareStyles.left) - 10 + 'px';
        break;

      case 'top':
        this.squareStyles.top = parseInt(this.squareStyles.top) - 10 + 'px';
        break;

      case 'bottom':
        this.squareStyles.top = parseInt(this.squareStyles.top) + 10 + 'px';
        break;

      case 'right':
        this.squareStyles.left = parseInt(this.squareStyles.left) + 10 + 'px';
        break;
      default:
        console.log('Erreur, ma gueule !');
    }
  }
}
