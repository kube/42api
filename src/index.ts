
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import * as fetch from 'isomorphic-fetch'

import { fetchToken } from './fetchToken'
import { Connection, Config } from './Connection'

import {
  ApiUser, ApiUsers,
  ApiProject, ApiProjects,
  ApiLocation, ApiLocations,
  ApiCampus, ApiCampuses
} from './types'
export * from './types'

export * from './Connection'

/**
 * Perform a request with desired verb on API endPoint
 */
export const perform = (verb: string) =>
  (api: Connection, endPoint: string) =>
    new Promise((resolve, reject) =>
      api.getToken()
        .then(token =>
          fetch(`${api.entryPoint}/${endPoint}`, {
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

type getUsersArgs = {
  login?: string,
  page?: number
}

export const getUsers =
  (api: Connection, page: number): Promise<ApiUsers> =>
    get(api, `users?page[number]=${page}`)

export const getUser =
  (api: Connection, userId: number): Promise<ApiUser> =>
    get(api, `users/${userId}`)

export const getProjects =
  (api: Connection, page: number): Promise<ApiProjects> =>
    get(api, `projects?page[number]=${page}`)

export const getProject =
  (api: Connection, projectId: number): Promise<ApiProject> =>
    get(api, `projects/${projectId}`)

export const getLocations =
  (api: Connection): Promise<ApiLocations> =>
    get(api, `locations`)

export const getUserLocations =
  (api: Connection, userId: number): Promise<ApiLocations> =>
    get(api, `locations/${userId}`)

export const getCampusLocations =
  (api: Connection, campusId: number): Promise<ApiLocations> =>
    get(api, `locations/${campusId}`)

export const getCampuses =
  (api: Connection): Promise<ApiCampus> =>
    get(api, `campus`)

export const getCampus =
  (api: Connection, campusId: number): Promise<ApiCampus> =>
    get(api, `campus/${campusId}`)
