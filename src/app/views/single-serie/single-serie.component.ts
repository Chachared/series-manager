import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serie } from '../../models/serie.model';
import { SerieService } from 'src/app/services/serie/serie.service';
import { Comment } from '../../models/comment.model';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-single-serie',
  templateUrl: './single-serie.component.html',
  styleUrls: ['./single-serie.component.css'],
})
export class SingleSerieComponent implements OnInit {
  serie!: Serie;
  comments!: Comment[];
  comment!: Comment;

  constructor(
    private route: ActivatedRoute,
    private serieService: SerieService,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    // Gets the series that has the same id than the one we clicked on the detail list, so we can display the one we clicked on
    this.serieService.getSerieById(+id).then((serie: Serie) => {
      this.serie = serie;
    });

    //Gets the comment(s) that have the same SerieId than the serie.id
    this.commentService.getCommentBySerieId(+id).then((serieComments) => {
      this.comments = serieComments;
    });
  }
}
