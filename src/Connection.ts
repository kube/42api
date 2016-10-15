
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { fetchToken } from './fetchToken'

/**
 * Builds a connection to 42 api
 */
export class Connection {
  server: string = 'https://api.intra.42.fr/'
  entryPoint: string = 'https://api.intra.42.fr/v2/'
  tokenUrl: string = 'https://api.intra.42.fr/oauth/token'
  clientId: string
  clientSecret: string

  private currentToken: string

  constructor(clientId: string, clientSecret: string) {
    this.clientId = clientId
    this.clientSecret = clientSecret
  }

  getToken() {
    if (this.currentToken === undefined)
      return fetchToken(this)
        .then(token => {
          this.currentToken = token
          return token
        })
    else
      return Promise.resolve(this.currentToken)
  }
}
