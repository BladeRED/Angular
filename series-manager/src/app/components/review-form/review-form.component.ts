import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SerieService } from 'src/app/services/serie/serie.service';
import { Review } from '../../models/Review';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css'],
})
export class ReviewFormComponent implements OnInit {
  @Output() formSubmitted: EventEmitter<Review>;
  @Input() buttonLabel!: string;

  form!: FormGroup;
  reviewList!: Review[];
  review!: Review;

  constructor(private fb: FormBuilder, private serieService: SerieService) {
    this.formSubmitted = new EventEmitter<Review>();
  }

  ngOnInit(): void {

    this.initForm();
    console.log(this.review);
  }

  onSubmitReviewForm(): void {
    this.formSubmitted.emit(this.review);
  }

  private initForm(): void {
    this.review = new Review(0, new Date(), '', '');

    // Un formulaire est un groupe dans lequel on a des contrôles
    //Un contrôle équivaut à un champ du formulaire
    this.form = this.fb.group({
      date: [null, [Validators.required]],
      author: [
        null,
        Validators.minLength(5),
        Validators.maxLength(20),
        [Validators.required],
      ],
      content: [
        null,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(300),
        ],
      ],
      available: [null],
    });
  }
}
