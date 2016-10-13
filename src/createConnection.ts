
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

export type Connection = {
  server: string,
  entryPoint: string,
  tokenUrl: string,
  clientId: string,
  clientSecret: string
}

/**
 * Builds a connection to 42 api
 */
export const createConnection = (config: Config): Connection => (
  {
    server: `${config.protocol}://${config.hostName}`,
    entryPoint: `${config.protocol}://${config.hostName}${config.rootEndPoint}`,
    tokenUrl: `${config.protocol}://${config.hostName}${config.tokenURL}`,
    clientId: config.clientId,
    clientSecret: config.clientSecret
  }
)
