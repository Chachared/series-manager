import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Serie } from '../../models/serie.model';
import { SerieService } from '../../services/serie/serie.service';

@Component({
  selector: 'app-edit-serie',
  templateUrl: './edit-serie.component.html',
  styleUrls: ['./edit-serie.component.css'],
})
export class EditSerieComponent implements OnInit {
  serie!: Serie;

  constructor(
    private serieService: SerieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']; //retourne une string
    this.serieService
      .getSerieById(+id) // ca le transforme en number (evite le parsInt)
      .then((serie: Serie) => {
        this.serie = serie;
      });
  }
  onSubmitEditedSerie(editedSerie: Serie): void {
    this.serieService.editSerie(editedSerie).then(() => {
      this.router.navigateByUrl('/series');
    });
  }
}
