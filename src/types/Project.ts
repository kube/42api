
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

export type ApiProjects = ApiProject[]

export type ApiProjectProject = {
  id: number,
  created_at: string,
  name: string,
  slug: string
}

export type ApiProjectCursus = {
  id: number,
  created_at: string,
  name: string,
  slug: string
}

export type ApiProjectSkill = {
  id: number,
  name: string,
  created_at: string
}

export type ApiProjectTag = {
  id: number,
  name: string
}

export type ApiProjectScale = {
  id: number,
  correction_number: number,
  is_primary: boolean
}

export type ApiProjectUpload = {
  id: number,
  name: string,
}

export type ApiProjectProjectSession = {
  id: number,
  solo: boolean,
  begin_at: string,
  end_at: string,
  estimate_time: number,
  duration_days: number,
  terminating_after: string,
  project_id: number,
  campus_id: number,
  cursus_id: number,
  created_at: string,
  updated_at: string,
  max_people: number,
  is_subscriptable: boolean,
  scales: ApiProjectScale[],
  uploads: ApiProjectUpload[],
  team_behaviour: string,
}

export type ApiProject = {
  id: number,
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
