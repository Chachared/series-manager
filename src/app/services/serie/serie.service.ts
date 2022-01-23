import { Injectable } from '@angular/core';
import { Serie } from 'src/app/models/serie.model';
import { CommentService } from '../comment/comment.service';

@Injectable({
  providedIn: 'root',
})
export class SerieService {
  series: Serie[];

  constructor(private commentService: CommentService) {
    this.series = [];

    this.series.push(
      new Serie(
        1,
        'Z nation',
        new Date('09/12/2014'),
        5,
        "Trois ans après qu'un virus ait ravagé les Etats-Unis, un seul homme est immunisé contre l'infection. Le futur de l'humanité dépend de lui, mais le terrible secret qu'il cache pourrait mettre en danger l'équipe chargée de le conduire jusqu'en Californie, dans un laboratoire susceptible de développer un vaccin. Le chemin sera long et semé d'embûches...",
        'Z Nation est la série à regarder lorsque l’on veut voir des tripes de zombies éclabousser l’écran, et il n’y a rien de mal à cela !',
        'https://i1.wp.com/www.cancelledscifi.com/wp-content/uploads/2016/09/z-nation-syfy-cancelled.jpg?fit=1000%2C600'
      )
    );

    this.series.push(
      new Serie(
        2,
        'Vikings',
        new Date('03/03/2013'),
        6,
        "Scandinavie, à la fin du 8ème siècle. Ragnar Lodbrok, un jeune guerrier viking, est avide d'aventures et de nouvelles conquêtes. Lassé des pillages sur les terres de l'Est, il se met en tête d'explorer l'Ouest par la mer. Malgré la réprobation de son chef, Haraldson, il se fie aux signes et à la volonté des dieux, en construisant une nouvelle génération de vaisseaux, plus légers et plus rapides.",
        "S'il est clair que Vikings ne sera jamais Game of Thrones, c'est une série qui devient de plus en plus divertissante au fil des épisodes. Elle ne présume pas de ses forces et, malgré sa diffusion sur History Channel, Hirst n'a pas la même latitude en ce qui concerne le sexe et la nudité que celle qu'il avait sur Showtime, mais devrait malgré tout trouver son public, plutôt jeune et plutôt mâle.",
        'https://static.papergeek.fr/2019/10/vikings-saison-6.jpg'
      )
    );

    this.series.push(
      new Serie(
        3,
        'Fringe',
        new Date('09/09/2008'),
        5,
        "Quand un vol international arrive à l'aéroport de Boston et que les passagers et l'équipage sont retrouvés morts, l'agent du FBI Olivia Dunham se voit confier l'enquête. Lorsque son partenaire est grièvement blessé, elle trouve une aide inattendue auprès du Dr Walter Bishop, un scientifique brillant mais fou, et de son fils, Peter.",
        "Beaucoup de gens décrivent Fringe comme le X-Files des années 2000/2010, et il est vrai que dans sa première saison, la série de Science-Fiction d'Abrams peut évoquer les enquêtes de Mulder et Scully dans les années 90. Mais ce n'est pas rendre entièrement justice aux scénaristes de Fringe.",
        'https://wallpapercave.com/wp/wp3381667.jpg'
      )
    );

    this.series.push(
      new Serie(
        4,
        'Dexter',
        new Date('10/01/2006'),
        9,
        "Brillant expert scientifique du service médico-légal de la police de Miami, Dexter Morgan est spécialisé dans l'analyse de prélèvements sanguins. Mais voilà, Dexter cache un terrible secret : il est également tueur en série.",
        "Débarquée en 2006 sur la chaîne Showtime, la série Dexter est sans aucun doute l'une des séries les plus appréciées des années 2000. Grâce à son humour noir et son personnage éponyme aussi complexe qu'attachant, la série de James Manos Jr a fait les belles heures de la chaîne américaine, lui permettant d'entrer en concurrence avec HBO et AMC.",
        'https://wallpapertops.com/walldb/original/b/6/3/694341.jpg'
      )
    );

    this.series.push(
      new Serie(
        5,
        'Californication',
        new Date('08/13/2007'),
        7,
        "Hank Moody est romancier et séparé de la mère de sa fille de 13 ans. Il est aussi accro aux femmes et aux drogues et ne peut s'empêcher de dire la vérité, tout le temps et à tout le monde. Oui, Hank est auto-destructeur...",
        "Des personnages tous hauts en couleurs et bonnes répliques bien. L'accroche de Californication: Sexe, drug's and Rock'n'Roll. Le propos est plus fin que cela. Sous un apparat de vulgarité bien filmée, le propos est correct. Sans oublier la musique, toujours excellente.",
        'https://www.zastavki.com/pictures/1366x768/2009/Movies_Films_C_Californication_013739_.jpg'
      )
    );
  }

  getSerieById(serieId: number): Promise<Serie> {
    return new Promise<Serie>((res, rej) => {
      for (let serie of this.series) {
        if (serie.id === serieId) {
          res(serie);
          break;
        }
      }
    });
  }

  addSerie(serieToAdd: Serie): Promise<void> {
    return new Promise<void>((res, rej) => {
      serieToAdd.id = this.series[this.series.length - 1].id + 1;
      this.series.push(serieToAdd);
      res();
    });
  }

  editSerie(editedSerie: Serie): Promise<void> {
    return new Promise<void>((res, rej) => {
      for (let [index, serie] of this.series.entries()) {
        if (serie.id === editedSerie.id) {
          this.series[index] = editedSerie;
          res();
          break;
        }
      }
    });
  }

  deleteSerie(serieIdToDelete: number): Promise<void> {
    return new Promise<void>((res, rej) => {
      for (let [index, serie] of this.series.entries()) {
        if (serie.id === serieIdToDelete) {
          this.series.splice(index, 1);
          res();
          break;
        }
      }
    });
  }
}
