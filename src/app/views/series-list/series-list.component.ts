import { Component, OnInit } from '@angular/core';
import { SerieService } from 'src/app/services/serie/serie.service';
import { Serie } from '../../models/serie.model';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css'],
})
export class SeriesListComponent implements OnInit {
  series!: Serie[];
  constructor(private serieService: SerieService) {}
  ngOnInit(): void {
    this.series = this.serieService.series;
  }
  onClickDeleteSerie(arrayIndex: number): void {
    this.serieService.deleteSerie(this.series[arrayIndex].id).then(() => {});
  }
}
