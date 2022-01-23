import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from 'src/app/models/comment.model';
import { CommentService } from '../../services/comment/comment.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css'],
})
export class NewCommentComponent implements OnInit {
  serieId!: number;

  constructor(
    private router: Router,
    private commentService: CommentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.serieId = this.route.snapshot.params['id'];
  }

  onSubmitNewComment(commentToAdd: Comment): void {
    this.commentService.addComment(commentToAdd).then(() => {
      this.router.navigateByUrl('series/' + this.serieId);
    });
  }
}
