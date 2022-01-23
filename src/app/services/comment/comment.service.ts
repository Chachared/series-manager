import { Injectable } from '@angular/core';
import { Comment } from '../../models/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  comments: Comment[];

  constructor() {
    this.comments = [];

    this.comments.push(
      new Comment(
        1,
        1,
        new Date('02/02/2015'),
        'Daratura',
        "Attention, cette série n'a rien à voir avec TWD. Avant de vous lancez dans Z Nation, il faut bien vous dire que cette série est une énorme blague comme Zombiland, Shaun Of The Dead et autre. Alors pourquoi cette série a une mauvaise note? Tout simplement parce que les gens la regarde au 1er degrés."
      )
    );
    this.comments.push(
      new Comment(
        2,
        1,
        new Date('11/11/2016'),
        'Azimov',
        "Totalement barré. Totalement jouissif. Comme dirait le doc, je paierais pour revoir des scènes pareilles, Surtout que la série développée sur trois saisons tente sans cesse d'explorer de nouvelles pistes."
      )
    );
    this.comments.push(
      new Comment(
        3,
        1,
        new Date('06/06/2020'),
        'Chaîne 42',
        "Beaucoup d'originalité et d'humour pour cette série qui vaut son -16 pour toutes les images gores à répétitions. Le prétexte le justifie au mieux et l'équipe que l'on suit de bout en bout apporte une moralité appréciable et étonnante dans un amas d'horreur, cela est une gageure assez improbable."
      )
    );

    this.comments.push(
      new Comment(
        4,
        3,
        new Date('07/07/2013'),
        'Jean Pierre F.',
        "De mon avis, Fringe restera l'une des séries les plus originales des années 2000 - 2010. Les créateurs et scénaristes sont restés cohérents et toujours fidèles à leur univers. Le public a eu du mal à accrocher car l'histoire est compliquée et les rebondissements importants. Un feuilleton qu'on a souvent comparé à X Files à tort car la série va plus loin dans l'imaginaire et la science-fiction."
      )
    );
    this.comments.push(
      new Comment(
        5,
        3,
        new Date('09/04/2013'),
        'Caine78',
        "Une des meilleures séries au monde c'est très prenant, la partie scientifique est très bien imaginée Bien sur les acteurs et actrices sont géniaux, très bon casting ! beaucoup d'émotions une mise en image talentueuse, la musique extra bref si vous n'avez pas encore vu dépêchez vous !"
      )
    );
    this.comments.push(
      new Comment(
        6,
        3,
        new Date('12/03/2013'),
        'Benoît R.',
        "Exellente série.Je ne peux accepter qu'elle soit fini !"
      )
    );
    this.comments.push(
      new Comment(
        7,
        3,
        new Date('11/07/2013'),
        'Florine N.',
        "Je suis Fringe depuis la toute première saison. C'est un chef d’œuvre du 7ème art qui n'a pourtant pas plus au grand publique; la jugent trop souvent sur son étiquette de série de Science-Fiction. Pourtant, Fringe n'est pas que cela. Peu de gens le savent, mais Fringe est basé sur des faits réels. Elle nous ouvre les portes de la science et nous élargis l'esprit. Elle exploite un filon très peu utiliser dans les séries du genre, celle d'un univers parallèles."
      )
    );

    this.comments.push(
      new Comment(
        8,
        2,
        new Date('03/04/2021'),
        'Hitfix',
        "Ça s'appelle Vikings. C'est à propos de Vikings. Et ça démarre plutôt bien (...) Fimmel, un ex mannequin dont l'arrivée à la télévision il y a une dizaine d'années via Tarzan a été plutôt rude, est devenu un comédien plutôt intéressant. Le personnage de Ragnar lui permet en outre de jouer sur ses points forts: une présence physique imposante, une vraie stature à l'écran, un regard un peu fou qui laisse transparaître une certaine intelligence."
      )
    );
    this.comments.push(
      new Comment(
        9,
        2,
        new Date('03/03/2021'),
        'Chachared',
        "Vikings est une création de Michael Hirst, lequel avait déjà imaginé The Tudors pour Showtime, et sa nouvelle série est clairement destinée à occuper le même terrain que celui de Game of Thrones. Ce qu'ont ces deux shows, et qui manque cruellement à Vikings, est une vraie intrigue. Pour la plupart, les personnages présentés inspirent peu d'intérêt."
      )
    );
    this.comments.push(
      new Comment(
        10,
        2,
        new Date('03/12/2019'),
        'Entertainment weekly',
        "Vikings, C'était super génial"
      )
    );

    this.comments.push(
      new Comment(
        14,
        4,
        new Date('12/11/2020'),
        'Chris46',
        "Dexter série culte . C'est l'histoire de dexter Morgan qui est expert en médecine légale spécialisé dans l'analyse de trace de sang dans la police de Miami . il aide la police a résoudre des meurtres . Mais dexter cache aussi un lourd secret il est tueur en série . Mais un tueur en série pas comme les autres car ils ne tue que des criminels qui ont réussit a échapper au système judiciaire ."
      )
    );
    this.comments.push(
      new Comment(
        15,
        4,
        new Date('06/11/2020'),
        'LeddyZ',
        "Dexter est une série extrêmement réputée: elle fait indéniablement partie de celles qui ont le plus de succès ces derniers temps, et à raison. En effet, comptant 8 saisons au total (la dernière sortant l'été prochain), elle n'est guère avare en qualités. Ce qui frappe le plus est le scénario: les caractères des personnages sont hyper travaillés, les rebondissements surviennent aux moments où l'on ne s'y attend pas (les saisons 2 et 4 demeurent selon moi les meilleures, absolument parfaites de bout en bout, et vous réservant une fin bluffante, qui vous rendra dingues, et vous marquera sans peine), et les saisons se suivent de manière fluide."
      )
    );
    this.comments.push(
      new Comment(
        16,
        4,
        new Date('03/11/2020'),
        'Marlon M.',
        "Incroyable tout simplement. Dexter est un chef d'œuvre orchestré de la plus belle manière où tous les protagonistes sont à leur apogée, y compris les plus secondaires. Michael C.Hall est phénoménale dans un rôle qui a été clairement écrit pour lui"
      )
    );
    this.comments.push(
      new Comment(
        11,
        5,
        new Date('12/09/2018'),
        'JojoBxl',
        "Série découverte via le box de l’intégrale. Des personnages tous hauts en couleurs et bonnes répliques bien. L'accroche de Californication: Sexe, drug's and Rock'n'Roll. Le propos est plus fin que cela. Sous un apparat de vulgarité bien filmée, le propos est correct. Sans oublier la musique, toujours excellente. La fin de la série est très bien."
      )
    );
    this.comments.push(
      new Comment(
        12,
        5,
        new Date('03/08/2018'),
        'Chachared',
        'S’il vous fallait un descriptif de Californication, il vous suffit juste de regarder le début du tout premier épisode qui se présente de la manière suivante : un rêve dans lequel notre héros arrive à l’église au volant de sa Porsche, jetant au passage son mégot dans le bénitier, et qui se retrouve face à une bonne sœur lui prodiguant une fellation afin d’oublier tous ses malheurs. En à peine 2 minutes, le ton est donné d’office : Californication est une série qui présente un personnage principal bouleversé (ce qui permettra quelques moments émotionnels) qui va vivre des aventures érotiques rocambolesques dans le cadre luxueux et exotique qu’est la côté Est des États-Unis.'
      )
    );
    this.comments.push(
      new Comment(
        13,
        5,
        new Date('03/03/2021'),
        'Tifenn R.',
        "Très drôle et légère 😁 J'ai regardé la série très rapidement et je ne l'ai jamais trouvé lassante"
      )
    );
  }

  //Gets the comment(s) that have the same SerieId
  getCommentBySerieId(idSerie: number): Promise<Comment[]> {
    return new Promise<Comment[]>((res, rej) => {
      let serieComments = [];
      for (let comment of this.comments) {
        if (idSerie === comment.serieId) {
          serieComments.push(comment);
        }
      }
      res(serieComments);
    });
  }

  addComment(commentToAdd: Comment): Promise<void> {
    return new Promise<void>((res, rej) => {
      commentToAdd.id = this.comments[this.comments.length - 1].id + 1;
      this.comments.push(commentToAdd);
      res();
    });
  }
}
