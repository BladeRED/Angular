export class User {


  private _id: string;
  private _username: string;
  private _email: string;
  private _firstName: string;
  private _lastName: string;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    createdAt: string | Date,
    updatedAt: string | Date,
    id: string = ''
  ) {
    this._id = id;
    this._username = username;
    this._email = email;
    this._firstName = firstName;
    this._lastName = lastName;

    this._createdAt =
      typeof createdAt === 'string' ? new Date(createdAt) : createdAt;
    this._updatedAt =
      typeof updatedAt === 'string' ? new Date(updatedAt) : updatedAt;
  }

  static fromJSON(dataAsJson: any): User {
    return new User(
      dataAsJson.username,
      dataAsJson.email,
      dataAsJson.firstname,
      dataAsJson.lastname,
      dataAsJson.createdAt,
      dataAsJson.updatedAt,
      dataAsJson._id,
    );
  }
   /**
     * Getter id
     * @return {string}
     */
    public get id(): string {
      return this._id;
    }

      /**
       * Getter username
       * @return {string}
       */
    public get username(): string {
      return this._username;
    }

      /**
       * Getter email
       * @return {string}
       */
    public get email(): string {
      return this._email;
    }

      /**
       * Getter firstName
       * @return {string}
       */
    public get firstName(): string {
      return this._firstName;
    }

      /**
       * Getter lastName
       * @return {string}
       */
    public get lastName(): string {
      return this._lastName;
    }

      /**
       * Getter createdAt
       * @return {Date}
       */
    public get createdAt(): Date {
      return this._createdAt;
    }

      /**
       * Getter updatedAt
       * @return {Date}
       */
    public get updatedAt(): Date {
      return this._updatedAt;
    }

      /**
       * Setter id
       * @param {string} value
       */
    public set id(value: string) {
      this._id = value;
    }

      /**
       * Setter username
       * @param {string} value
       */
    public set username(value: string) {
      this._username = value;
    }

      /**
       * Setter email
       * @param {string} value
       */
    public set email(value: string) {
      this._email = value;
    }

      /**
       * Setter firstName
       * @param {string} value
       */
    public set firstName(value: string) {
      this._firstName = value;
    }

      /**
       * Setter lastName
       * @param {string} value
       */
    public set lastName(value: string) {
      this._lastName = value;
    }

      /**
       * Setter createdAt
       * @param {Date} value
       */
    public set createdAt(value: Date) {
      this._createdAt = value;
    }

      /**
       * Setter updatedAt
       * @param {Date} value
       */
    public set updatedAt(value: Date) {
      this._updatedAt = value;
    }

/*

// Instanciation d'un nouvel utilisateur
const userOne = new User(
  'Toto',
  'contact@toto.gmail',
  'Thomas',
  'CHEVALIER',
  new Date,
  new Date()); // Objet de classe

console.log(userOne.username); // Toto
console.log(userOne.firstname); // THOMAS

console.log(userOne.firstname + ' ' + userOne.lastname);
console.log(userOne.fullName);

// Plain Object
const userAsJson = {
  _id: 'aazeaze',
  username: 'Toto',
  email: 'contact@toto.gmail',
  firstname: 'Thomas',
  lastname: 'CHEVALIER',
  createdAt: '04/01/2022',
  updatedAt: '04/01/2022',
};

console.log(userAsJson.username); // Toto
console.log(userAsJson.firstname.toUpperCase()); // THOMAS

const userFromJson = User.fromJSON(userAsJson); // Rendre générique et réutilisable du code

console.log(userFromJson.fullName);

*/
}
