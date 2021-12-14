import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {

  @Input() rows: string;
  @Input() cols: string;

  rowsTmp: Array<any>;


  constructor() {

    this.rows = '';
    this.cols = '';
    this.rowsTmp = [];

   }

  ngOnInit(): void {

    this.rowsTmp = Array(+this.rows);
  }

}
