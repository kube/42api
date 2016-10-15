
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { Id } from './Id'

export type ApiUserProject = {
  id: Id,
  occurrence: number,
  final_mark: number,
  status: string,
  'validated?': boolean,
  current_team_id: Id,
  project: {
    id: Id,
    name: string,
    slug: string
  }
}

export type ApiUserProjects = ApiUserProject[]
