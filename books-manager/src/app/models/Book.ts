

export class Book{

  private _id: number;
  private _title: string;
  private _description: string;
  private _author: string;
  private _available: boolean;

  constructor(id: number, title: string, description: string, author: string, available: boolean) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._author = author;
    this._available = available;
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
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Getter author
     * @return {string}
     */
	public get author(): string {
		return this._author;
	}

    /**
     * Getter available
     * @return {boolean}
     */
	public get available(): boolean {
		return this._available;
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
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}

    /**
     * Setter author
     * @param {string} value
     */
	public set author(value: string) {
		this._author = value;
	}

    /**
     * Setter available
     * @param {boolean} value
     */
	public set available(value: boolean) {
		this._available = value;
	}


};

