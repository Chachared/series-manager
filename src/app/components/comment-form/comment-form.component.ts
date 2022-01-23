import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../../models/comment.model';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
})
export class CommentFormComponent implements OnInit {
  @Output() formSubmitted: EventEmitter<Comment>;
  @Input() buttonLabel!: string;
  @Input() commentToEdit!: Comment;
  @Input() serieId!: number;

  form!: FormGroup;
  comment!: Comment;

  constructor(private fb: FormBuilder) {
    this.formSubmitted = new EventEmitter<Comment>();
  }
  ngOnInit(): void {
    this.initForm();
  }

  onSubmitCommentForm(): void {
    this.formSubmitted.emit(this.comment);
  }

  private initForm(): void {
    this.comment = new Comment(0, +this.serieId, new Date(), '', '');
    this.form = this.fb.group({
      author: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      commentText: [
        null,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(200),
        ],
      ],
    });
  }
}
