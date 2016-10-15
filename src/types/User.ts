
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { Id } from './Id'
import { ApiUserProject } from './UserProject'
import { ApiCampuses } from './Campus'

export type ApiUsers = {
  id: Id,
  login: string,
  url: string
}[]

export type ApiUser = {
  id: Id,
  email: string,
  login: string,
  first_name: string,
  last_name: string,
  url: string,
  phone: string,
  displayname: string,
  image_url: string,
  'staff?': boolean,
  correction_point: number,
  pool_month: string,
  pool_year: string,
  location: string,
  wallet: number,
  groups: any[],
  cursus_users: {
    id: Id,
    begin_at: string,
    end_at: string,
    grade: string,
    level: number,
    skills: any[],
    cursus_id: Id,
    user: {
      id: Id,
      login: string,
      url: string
    },
    cursus: {
      id: Id,
      created_at: string,
      name: string,
      slug: string
    }
  }[],
  projects_users: ApiUserProject[],
  achievements: {
    id: Id,
    name: string,
    description: string,
    tier: string,
    kind: string,
    visible: boolean,
    image: string,
    nbr_of_success: number,
    users_url: string
  }[],
  titles: any[],
  partnerships: {
    id: Id,
    name: string,
    slug: string,
    tier: number,
    url: string,
    partnerships_users_url: string
  }[],
  patroned: {
    id: Id,
    user_id: Id,
    godfather_id: Id,
    ongoing: boolean,
    created_at: string,
    updated_at: string
  }[],
  patroning: any[],
  expertises_users: {
    id: Id,
    expertise_id: Id,
    interested: boolean,
    value: number,
    contact_me: boolean,
    created_at: string,
    user_id: Id
  }[],
  campus: ApiCampuses
}
