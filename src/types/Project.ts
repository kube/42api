
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { Id } from './Id'

export type ApiProjectProject = {
  id: Id,
  created_at: string,
  name: string,
  slug: string
}

export type ApiProjectCursus = {
  id: Id,
  created_at: string,
  name: string,
  slug: string
}

export type ApiProjectSkill = {
  id: Id,
  name: string,
  created_at: string
}

export type ApiProjectTag = {
  id: Id,
  name: string
}

export type ApiProjectScale = {
  id: Id,
  correction_number: number,
  is_primary: boolean
}

export type ApiProjectUpload = {
  id: Id,
  name: string,
}

export type ApiProjectProjectSession = {
  id: Id,
  solo: boolean,
  begin_at: string,
  end_at: string,
  estimate_time: number,
  duration_days: number,
  terminating_after: string,
  project_id: Id,
  campus_id: Id,
  cursus_id: Id,
  created_at: string,
  updated_at: string,
  max_people: number,
  is_subscriptable: boolean,
  scales: ApiProjectScale[],
  uploads: ApiProjectUpload[],
  team_behaviour: string,
}

export type ApiProject = {
  id: Id,
  name: string,
  slug: string,
  description: string,
  parent: ApiProjectProject,
  children: ApiProjectProject[],
  objectives: string[],
  tier: number,
  attachments: any[],
  created_at: string,
  updated_at: string,
  exam: boolean,
  cursus: ApiProjectCursus[],
  skills: ApiProjectSkill[],
  tags: ApiProjectTag[],
  project_sessions: ApiProjectProjectSession
}

export type ApiProjects = ApiProject[]
