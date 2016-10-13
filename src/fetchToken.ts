
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import * as fetch from 'isomorphic-fetch'
import * as FormData from 'form-data'
import { Connection } from './Connection'

/**
 * Helper to create proper FormData for POST requests body
 */
const formData = (body: { [key: string]: string }) => {
  const form = new FormData()
  for (let key in body) {
    form.append(key, body[key])
  }
  return form
}

/**
 * Get API Access Token
 */
export const fetchToken = (api: Connection) =>
  new Promise<string>((resolve, reject) =>
    fetch(api.tokenUrl, {
      method: 'POST',
      body: formData({
        'grant_type': 'client_credentials',
        'client_id': api.clientId,
        'client_secret': api.clientSecret
      })
    })
      .then(res => res.json())
      .then(body => {
        const token = body['access_token']

        if (token !== undefined)
          resolve(token)
        else
          reject(new Error('No Access Token returned by server'))
      })
      .catch(reject)
  )
