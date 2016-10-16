
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import * as fetch from 'isomorphic-fetch'
import { formatQuerystring } from './querystring'

import { Connection } from './Connection'

import {
  Id,
  ApiUser, ApiUsers,
  ApiUserProject,
  ApiProject, ApiProjects,
  ApiLocation, ApiLocations,
  ApiCampus,
  ApiRole, ApiRoles,
  ApiSkill, ApiSkills
} from './types'
export * from './types'

export * from './Connection'

/**
 * Generic type of QueryString args for 42 api
 */
export type QueryStringArgs = {
  page?: {
    number?: number,
    size?: number
  },
  filter?: {
    [key: string]: number | boolean | string | (string | number)[]
  },
  sort?: string[]
}

/**
 * Perform a request with desired verb on API endPoint
 */
export const performRequest = (verb: string) =>
  (conn: Connection, endPoint: string, args?: QueryStringArgs) =>
    new Promise((resolve, reject) =>
      conn.getToken()
        .then(token =>
          fetch(`${conn.entryPoint}/${endPoint}?${formatQuerystring(args)}`, {
            method: verb,
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
        )
        .then(res => res.json())
        .then(resolve)
        .catch(reject)
    )

export const get = performRequest('GET')
export const post = performRequest('POST')
export const patch = performRequest('PATCH')

export const getUsers =
  (conn: Connection, args?: QueryStringArgs): Promise<ApiUsers> =>
    get(conn, `users`, args)

export const getUser =
  (conn: Connection, userId: Id, args?: QueryStringArgs): Promise<ApiUser> =>
    get(conn, `users/${userId}`, args)

export const getUserProject =
  (conn: Connection, userProjectId: Id,
    args?: QueryStringArgs): Promise<ApiUserProject> =>
    get(conn, `projects_users/${userProjectId}`, args)

export const getUserProjects =
  (conn: Connection, userId: Id, args?: QueryStringArgs): Promise<ApiUserProject[]> =>
    get(conn, `cursus/${userId}/projects_users`, args)

export const getProjects =
  (conn: Connection, args?: QueryStringArgs): Promise<ApiProjects> =>
    get(conn, `projects`, args)

export const getProject =
  (conn: Connection, projectId: Id, args?: QueryStringArgs): Promise<ApiProject> =>
    get(conn, `projects/${projectId}`, args)

export const getLocations =
  (conn: Connection, args?: QueryStringArgs): Promise<ApiLocations> =>
    get(conn, `locations`, args)

export const getUserLocations =
  (conn: Connection, userId: Id, args?: QueryStringArgs): Promise<ApiLocations> =>
    get(conn, `users/${userId}/locations`, args)

export const getCampusLocations =
  (conn: Connection, campusId: Id, args?: QueryStringArgs): Promise<ApiLocations> =>
    get(conn, `locations/${campusId}`, args)

export const getCampuses =
  (conn: Connection, args?: QueryStringArgs): Promise<ApiCampus> =>
    get(conn, `campus`, args)

export const getCampus =
  (conn: Connection, campusId: Id, args?: QueryStringArgs): Promise<ApiCampus> =>
    get(conn, `campus/${campusId}`, args)

export const getRoles =
  (conn: Connection, args?: QueryStringArgs): Promise<ApiRoles> =>
    get(conn, `roles`, args)

export const getUserRoles =
  (conn: Connection, userId: Id, args?: QueryStringArgs): Promise<ApiRoles> =>
    get(conn, `users/${userId}/roles`, args)

export const getSkills =
  (conn: Connection, args?: QueryStringArgs): Promise<ApiSkills> =>
    get(conn, `skills`, args)

export const getProjectSkills =
  (conn: Connection, projectId: Id, args?: QueryStringArgs): Promise<ApiSkills> =>
    get(conn, `projects/${projectId}/skills`, args)

export const getCursusSkills =
  (conn: Connection, cursusId: Id, args?: QueryStringArgs): Promise<ApiSkills> =>
    get(conn, `cursus/${cursusId}/skills`, args)
