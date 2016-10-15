
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { Id } from './Id'

export type ApiLocation = {
  id: Id,
  begin_at: string,
  end_at: string,
  primary: boolean,
  floor: number,
  row: number,
  post: number,
  host: string,
  campus_id: Id,
  user: {
    id: Id,
    login: string,
    url: string
  }
}

export type ApiLocations = ApiLocation[]
