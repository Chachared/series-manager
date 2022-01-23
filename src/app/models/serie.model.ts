export class Serie {
  private _id: number;
  private _title: string;
  private _releaseDate: Date;
  private _numberOfSeasons: number;
  private _description: string;
  private _review: string;
  private _imgUrl: string;

  constructor(
    id: number,
    title: string,
    releaseDate: Date,
    numberOfSeasons: number,
    description: string,
    review: string,
    imgUrl: string
  ) {
    this._id = id;
    this._title = title;
    this._releaseDate = releaseDate;
    this._numberOfSeasons = numberOfSeasons;
    this._description = description;
    this._review = review;
    this._imgUrl = imgUrl;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter title
   * @return {string}
   */
  public get title(): string {
    return this._title;
  }

  /**
   * Getter releaseDate
   * @return {Date}
   */
  public get releaseDate(): Date {
    return this._releaseDate;
  }

  /**
   * Getter numberOfSeasons
   * @return {number}
   */
  public get numberOfSeasons(): number {
    return this._numberOfSeasons;
  }

  /**
   * Getter description
   * @return {string}
   */
  public get description(): string {
    return this._description;
  }

  /**
   * Getter review
   * @return {string}
   */
  public get review(): string {
    return this._review;
  }

  /**
   * Getter imgUrl
   * @return {string}
   */
  public get imgUrl(): string {
    return this._imgUrl;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter title
   * @param {string} value
   */
  public set title(value: string) {
    this._title = value;
  }

  /**
   * Setter releaseDate
   * @param {Date} value
   */
  public set releaseDate(value: Date) {
    this._releaseDate = value;
  }

  /**
   * Setter numberOfSeasons
   * @param {number} value
   */
  public set numberOfSeasons(value: number) {
    this._numberOfSeasons = value;
  }

  /**
   * Setter description
   * @param {string} value
   */
  public set description(value: string) {
    this._description = value;
  }

  /**
   * Setter review
   * @param {string} value
   */
  public set review(value: string) {
    this._review = value;
  }

  /**
   * Setter imgUrl
   * @param {string} value
   */
  public set imgUrl(value: string) {
    this._imgUrl = value;
  }
}
