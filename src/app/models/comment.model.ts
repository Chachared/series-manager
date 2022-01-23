export class Comment {
  private _id: number;
  private _serieId: number;
  private _date: Date;
  private _author: string;
  private _commentText: string;

  constructor(
    id: number,
    serieId: number,
    date: Date,
    author: string,
    commentText: string
  ) {
    this._id = id;
    this._serieId = serieId;
    this._date = date;
    this._author = author;
    this._commentText = commentText;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }
  /**
   * Getter serieId
   * @return {number}
   */
  public get serieId(): number {
    return this._serieId;
  }
  /**
   * Getter date
   * @return {Date}
   */
  public get date(): Date {
    return this._date;
  }

  /**
   * Getter author
   * @return {string}
   */
  public get author(): string {
    return this._author;
  }

  /**
   * Getter commentText
   * @return {string}
   */
  public get commentText(): string {
    return this._commentText;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }
  /**
   * Setter serieId
   * @param {number} value
   */
  public set serieId(value: number) {
    this._serieId = value;
  }

  /**
   * Setter date
   * @param {Date} value
   */
  public set date(value: Date) {
    this._date = value;
  }

  /**
   * Setter author
   * @param {string} value
   */
  public set author(value: string) {
    this._author = value;
  }

  /**
   * Setter commentText
   * @param {string} value
   */
  public set commentText(value: string) {
    this._commentText = value;
  }
}
