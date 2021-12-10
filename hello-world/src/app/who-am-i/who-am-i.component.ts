import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-who-am-i',
  templateUrl: './who-am-i.component.html',
  styleUrls: ['./who-am-i.component.css'],
})
export class WhoAmIComponent implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;

  @Output() onClickedShowAge: EventEmitter<void>;

  isDisabled: boolean;
  isChecked: boolean;

  constructor() {
    this.firstName = 'Julien';
    this.lastName = 'RAYNAUD';
    this.isDisabled = false;
    this.isChecked = false;
    this.onClickedShowAge = new EventEmitter<void>();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.firstName = 'Robert';
      this.lastName = 'Dubonvin';
      this.isDisabled = true;
      this.isChecked = true;
    }, 10000);

    setTimeout(() => {
      this.firstName = 'Julien';
      this.lastName = 'RAYNAUD';
      this.isDisabled = false;
      this.isChecked = false;
    }, 20000);
  }

  onClickShowAge(): void {
    this.onClickedShowAge.emit();
  }
}
