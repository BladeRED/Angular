import { User } from "./user.model";

export class Offer {
  private _id: string;
  private _name: string;
  private _description: string;
  private _dateBegin: Date;
  private _dateEnd: Date;
  private _imgUrl: string;
  private _creatorId: string | User;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(
    id: string = '',
    name: string,
    description: string,
    dateBegin: string | Date,
    dateEnd: string | Date,
    imgUrl: string,
    creatorId: string | User,
    createdAt: string | Date,
    updatedAt: string | Date
  ) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._dateBegin = typeof dateBegin ==='string' ? new Date(dateBegin) : dateBegin;
    this._dateEnd = typeof dateEnd ==='string' ? new Date(dateEnd) : dateEnd;
    this._imgUrl = imgUrl;
    this._creatorId = typeof creatorId ==='string' ? creatorId : User.fromJSON(creatorId);
    this._createdAt =
      typeof createdAt === 'string' ? new Date(createdAt) : createdAt;
    this._updatedAt =
      typeof updatedAt === 'string' ? new Date(updatedAt) : updatedAt;
  }

  static fromJSON(dataAsJson: any): Offer {
    return new Offer(
      dataAsJson.name,
      dataAsJson.description,
      dataAsJson.dateBegin,
      dataAsJson.dateEnd,
      dataAsJson.imgUrl,
      dataAsJson.creatorId,
      dataAsJson.createdAt,
      dataAsJson.updatedAt,
      dataAsJson._id
    );
  }

  // From object class to plain object //////////////////////////////////
  // For new and edit //

  toJSON(): any{

return {

_id: this._id,
name: this.name,
description: this.description,
imgUrl: this.imgUrl,
creatorId: typeof this.creatorId === 'string' ? this.creatorId : this.creatorId.id,
dateBegin: this.dateBegin,
dateEnd: this.dateEnd,
createdAt: this.createdAt,
updatedAt: this.updatedAt,

}

  }


    /**
     * Getter id
     * @return {string}
     */
	public get id(): string {
		return this._id;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Getter dateBegin
     * @return {Date}
     */
	public get dateBegin(): Date {
		return this._dateBegin;
	}

    /**
     * Getter dateEnd
     * @return {Date}
     */
	public get dateEnd(): Date {
		return this._dateEnd;
	}

    /**
     * Getter imgUrl
     * @return {string}
     */
	public get imgUrl(): string {
		return this._imgUrl;
	}

    /**
     * Getter creatorId
     * @return {string }
     */
	public get creatorId(): string | User  {
		return this._creatorId;
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
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}

    /**
     * Setter dateBegin
     * @param {Date} value
     */
	public set dateBegin(value: Date) {
		this._dateBegin = value;
	}

    /**
     * Setter dateEnd
     * @param {Date} value
     */
	public set dateEnd(value: Date) {
		this._dateEnd = value;
	}

    /**
     * Setter imgUrl
     * @param {string} value
     */
	public set imgUrl(value: string) {
		this._imgUrl = value;
	}

    /**
     * Setter creatorId
     * @param {string } value
     */
	public set creatorId(value: string | User) {
    this._creatorId = value;
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

}
