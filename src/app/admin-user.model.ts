export class AdminUser {
  constructor(
    public name: string,
    public imageUrl: string,
    private _token: string, // + private _tokenExpirationDate: Date
    private _tokenExpirationDate: Date
  ) {}

  get token() {
    // here potentially will be placed tokenExpirationDate chacker
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}
