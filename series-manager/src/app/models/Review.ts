export class Review {
  private _id: number;
  private _date: Date;
  private _pseudo: string;
  private _content: string;

  constructor(id: number, date: Date, pseudo: string, content: string) {
    this._id = id;
    this._date = date;
    this._pseudo = pseudo;
    this._content = content;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
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
   * Getter pseudo
   * @return {string}
   */
  public get pseudo(): string {
    return this._pseudo;
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
   * @param {number} value
   */
  public set id(value: number) {
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
   * Setter pseudo
   * @param {string} value
   */
  public set pseudo(value: string) {
    this._pseudo = value;
  }

  /**
   * Setter content
   * @param {string} value
   */
  public set content(value: string) {
    this._content = value;
  }
}
