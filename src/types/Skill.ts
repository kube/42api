
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { Id } from './Id'

export type ApiSkill = {
  id: Id,
  name: string,
  created_at: string
}

export type ApiSkills = ApiSkill[]
