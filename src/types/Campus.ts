
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { Id } from './Id'

export type ApiCampusEndpoint = {
  id: Id,
  description: string,
  created_at: string,
  updated_at: string
}

export type ApiCampus = {
  id: Id,
  name: string,
  time_zone: string,
  language: {
    id: Id,
    name: string,
    identifier: string
  },
  users_count: number,
  vogsphere_id: Id,
  endpoint: ApiCampusEndpoint | null
}

export type ApiCampuses = ApiCampus[]
