import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';

import { Offer } from '../../models/offer.model';

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.css'],
})
export class OfferFormComponent implements OnInit {

  @Output() formSubmitted: EventEmitter<Offer>;
  @Input() offerToEdit!: Offer;
  @Input() buttonLabel!: string;


  offer!: Offer;
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formSubmitted = new EventEmitter<Offer>();
  }

  ngOnInit(): void {
    this.initForm();
  }

  onChangeDateBegin(dateBeginString: string) {
    this.offer.dateBegin = new Date(Date.parse(dateBeginString));
  }

  onChangeDateEnd(dateEndString: string) {
    this.offer.dateEnd = new Date(Date.parse(dateEndString));
  }

  onSubmitOfferForm(): void {
    if (this.form.valid) {
      this.formSubmitted.emit(this.offer);
    }
  }

  private initForm(): void {
    if (this.offerToEdit) {
      this.offer = this.offerToEdit;
    } else {
      this.offer = new Offer(
            '',
            '',
            new Date(),
            new Date(),
            '',
            new User('', '', '', '', new Date(), new Date(), ''),
            new Date(),
            new Date(),
            ''
          );
        }
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
        description: [
          null,
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(250),
          ],
        ],
        imgUrl: [null, [Validators.required, Validators.minLength(10)]],
        dateBegin: [null, [Validators.required]],
        dateEnd: [null, [Validators.required]],
      });

  }
}
