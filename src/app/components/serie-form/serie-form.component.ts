import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Serie } from '../../models/serie.model';

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

  onChangeReleaseDate(releaseDateString: string) {
    this.serie.releaseDate = new Date(Date.parse(releaseDateString));
  }

  onSubmitSerieForm(): void {
    this.formSubmitted.emit(this.serie);
  }

  private initForm(): void {
    this.serie = this.serieToEdit
      ? this.serieToEdit
      : new Serie(0, '', new Date(), 0, '', '', '');

    this.form = this.fb.group({
      title: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      releaseDate: [null, [Validators.required]],
      numberOfSeasons: [
        null,
        [Validators.required, Validators.minLength(1), Validators.maxLength(2)],
      ],
      description: [
        null,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(250),
        ],
      ],
      review: [
        null,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(250),
        ],
      ],
      imgUrl: [
        null,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(250),
        ],
      ],
    });
  }
}
