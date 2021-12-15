export class Car {
  private _image: string;
  private _brand: string;
  private _model: string;
  private _isRented: boolean;

  constructor(image: string, brand: string, model: string, isRented: boolean) {
    this._image = image;
    this._brand = brand;
    this._model = model;
    this._isRented = isRented;
  }

  /**
   * Getter image
   * @return {string}
   */
  public get image(): string {
    return this._image;
  }

  /**
   * Getter brand
   * @return {string}
   */
  public get brand(): string {
    return this._brand;
  }

  /**
   * Getter model
   * @return {string}
   */
  public get model(): string {
    return this._model;
  }

  /**
   * Getter isRented
   * @return {boolean}
   */
  public get isRented(): boolean {
    return this._isRented;
  }

  /**
   * Setter image
   * @param {string} value
   */
  public set image(value: string) {
    this._image = value;
  }

  /**
   * Setter brand
   * @param {string} value
   */
  public set brand(value: string) {
    this._brand = value;
  }

  /**
   * Setter model
   * @param {string} value
   */
  public set model(value: string) {
    this._model = value;
  }

  /**
   * Setter isRented
   * @param {boolean} value
   */
  public set isRented(value: boolean) {
    this._isRented = value;
  }
}
