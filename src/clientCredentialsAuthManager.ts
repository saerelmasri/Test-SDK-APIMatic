/**
 * CELITECH APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { OAuthToken } from './models/oAuthToken';
import { ClientInterface } from "./clientInterface";
import { OAuthAuthorizationController} from './controllers/oAuthAuthorizationController';

export class ClientCredentialsAuthManager {
  private _oAuthClientId: string;
  private _oAuthClientSecret: string;
  private _oAuthController: OAuthAuthorizationController;

  constructor({
    oAuthClientId,
    oAuthClientSecret,
  }:{
    oAuthClientId: string,
    oAuthClientSecret: string,
  }, client: ClientInterface) {
    this._oAuthClientId = oAuthClientId;
    this._oAuthClientSecret = oAuthClientSecret;
    this._oAuthController = new OAuthAuthorizationController(client);
  }

  public async fetchToken(
    additionalParams?: Record<string, unknown>
  ): Promise<OAuthToken> {
    const authorization = this.getClientBasicAuth(
      this._oAuthClientId,
      this._oAuthClientSecret
    );
    const { result } = await this._oAuthController.requestToken(
      authorization,
      undefined,
      additionalParams
    );
    return this.setExpiry(result);
  }
  
  private getClientBasicAuth(clientId: string, clientSecret: string): string {
    return `Basic ${Buffer.from(clientId + ':' + clientSecret,).toString(
      'base64'
    )}`;
  }

  private async setExpiry(token: OAuthToken) {
    const newToken = token
    if (newToken.expiresIn) {
      newToken.expiry = BigInt(Math.round(Date.now() / 1000)) + newToken.expiresIn;
    }
    return newToken;
  }
}
