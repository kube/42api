
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { fetchToken } from './fetchToken'

export type Config = {
  protocol: string,
  hostName: string,
  tokenURL: string,
  rootEndPoint: string,
  clientId: string,
  clientSecret: string
}

/**
 * Builds a connection to 42 api
 */
export class Connection {
  server: string
  entryPoint: string
  tokenUrl: string
  clientId: string
  clientSecret: string

  private currentToken: string

  constructor(config: Config) {
    this.server = `${config.protocol}://${config.hostName}`
    this.entryPoint = `${config.protocol}://${config.hostName}${config.rootEndPoint}`
    this.tokenUrl = `${config.protocol}://${config.hostName}${config.tokenURL}`
    this.clientId = config.clientId
    this.clientSecret = config.clientSecret
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
