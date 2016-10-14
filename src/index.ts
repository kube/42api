
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

import { fetchToken } from './fetchToken'
import { Connection, Config } from './Connection'

import {
  ApiUser, ApiUsers,
  ApiProject, ApiProjects,
  ApiLocation, ApiLocations,
  ApiCampus, ApiCampuses,
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

export type ApiRequest<T> =
  (api: Connection, ...params: any[]) => Promise<T>

/**
 * Perform a request with desired verb on API endPoint
 */
export const perform = (verb: string) =>
  (api: Connection, endPoint: string, args?: QueryStringArgs) =>
    new Promise((resolve, reject) =>
      api.getToken()
        .then(token =>
          fetch(`${api.entryPoint}/${endPoint}?${formatQuerystring(args)}`, {
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

export const get = perform('GET')
export const post = perform('POST')
export const patch = perform('PATCH')

export const getUsers: ApiRequest<ApiUsers> =
  (api: Connection, args?: QueryStringArgs) =>
    get(api, `users`)

export const getUser: ApiRequest<ApiUser> =
  (api: Connection, userId: number, args?: QueryStringArgs) =>
    get(api, `users/${userId}`, args)

export const getProjects: ApiRequest<ApiProjects> =
  (api: Connection, args?: QueryStringArgs) =>
    get(api, `projects`, args)

export const getProject: ApiRequest<ApiProject> =
  (api: Connection, projectId: number, args?: QueryStringArgs) =>
    get(api, `projects/${projectId}`, args)

export const getLocations: ApiRequest<ApiLocations> =
  (api: Connection, args?: QueryStringArgs) =>
    get(api, `locations`, args)

export const getUserLocations: ApiRequest<ApiLocations> =
  (api: Connection, userId: number, args?: QueryStringArgs) =>
    get(api, `locations/${userId}`, args)

export const getCampusLocations: ApiRequest<ApiLocations> =
  (api: Connection, campusId: number, args?: QueryStringArgs) =>
    get(api, `locations/${campusId}`, args)

export const getCampuses: ApiRequest<ApiCampus> =
  (api: Connection, args?: QueryStringArgs) =>
    get(api, `campus`, args)

export const getCampus: ApiRequest<ApiCampus> =
  (api: Connection, campusId: number, args?: QueryStringArgs) =>
    get(api, `campus/${campusId}`, args)

export const getRoles: ApiRequest<ApiRoles> =
  (api: Connection, args?: QueryStringArgs) =>
    get(api, `roles`, args)

export const getUserRoles: ApiRequest<ApiRoles> =
  (api: Connection, userId: number, args?: QueryStringArgs) =>
    get(api, `users/${userId}/roles`, args)

export const getSkills: ApiRequest<ApiSkills> =
  (api: Connection, args?: QueryStringArgs) =>
    get(api, `skills`, args)

export const getProjectSkills: ApiRequest<ApiSkills> =
  (api: Connection, projectId: number, args?: QueryStringArgs) =>
    get(api, `projects/${projectId}/skills`, args)

export const getCursusSkills: ApiRequest<ApiSkills> =
  (api: Connection, cursusId: number, args?: QueryStringArgs) =>
    get(api, `cursus/${cursusId}/skills`, args)
