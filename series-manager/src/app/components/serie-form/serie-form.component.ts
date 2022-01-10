import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Serie } from '../../models/Serie';
import { Review } from '../../models/Review';

@Component({
  selector: 'app-serie-form',
  templateUrl: './serie-form.component.html',
  styleUrls: ['./serie-form.component.css'],
})
export class SerieFormComponent implements OnInit {
  @Output() formSubmitted: EventEmitter<Serie>;
  @Input() buttonLabel!: string;
  @Input() serieToEdit!: Serie;

  form!: FormGroup;

  serie!: Serie;

  constructor(private fb: FormBuilder) {
    this.formSubmitted = new EventEmitter<Serie>();
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmitSerieForm(): void {
    this.formSubmitted.emit(this.serie);
  }

  private initForm(): void {
    this.serie = this.serieToEdit
      ? this.serieToEdit
      : new Serie(
          0,
          '',
          new Date(),
          0,
          '',
          '',
          '',
          new Review(0, new Date(), '', '')
        );

    // Un formulaire est un groupe dans lequel on a des contrôles
    //Un contrôle équivaut à un champ du formulaire
    this.form = this.fb.group({
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30),
        ],
      ],
      firstSeasonRelease: [null, [Validators.required]],
      numberOfSeasons: [null, [Validators.required]],
      description: [
        null,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(999),
        ],
      ],
      critic: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(999),
        ],
      ],
      imgUrl: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(200),
        ],
      ],
      available: [null],
    });
  }
}
