
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

export type ApiCampusEndpoint = {
  id: number,
  description: string,
  created_at: string,
  updated_at: string
}

export type ApiCampus = {
  id: number,
  name: string,
  time_zone: string,
  language: {
    id: number,
    name: string,
    identifier: string
  },
  users_count: number,
  vogsphere_id: number,
  endpoint: ApiCampusEndpoint | null
}

export type ApiCampuses = ApiCampus[]
