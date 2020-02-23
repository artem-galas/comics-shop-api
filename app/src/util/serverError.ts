type ServerErrorParams = {
  status: number;
  message?: string;
}

export class ServerError extends Error {
  status: number;
  constructor({status, message}: ServerErrorParams) {
    super(message);
    this.status = status;
  }
}
