
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { Id } from './Id'

export type ApiRole = {
  id: Id,
  name: string,
  description: string
}

export type ApiRoles = ApiRole[]
