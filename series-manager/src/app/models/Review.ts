export class Review {
  private _id: string;
  private _date: Date;
  private _author: string;
  private _content: string;

  constructor(id: string, date: Date, author: string, content: string) {
    this._id = id;
    this._date = date;
    this._author = author;
    this._content = content;
  }

  /**
   * Getter id
   * @return {string}
   */
  public get id(): string {
    return this._id;
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
   * Getter content
   * @return {string}
   */
  public get content(): string {
    return this._content;
  }

  /**
   * Setter id
   * @param {string} value
   */
  public set id(value: string) {
    this._id = value;
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
   * Setter content
   * @param {string} value
   */
  public set content(value: string) {
    this._content = value;
  }
}
