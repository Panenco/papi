export class MockRequest {
  public headers: any;
  public token: any;
  constructor() {
    this.headers = {};
  }
  header(key: string) {
    return this.headers[key];
  }
}
