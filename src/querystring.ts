
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

type querystringInput = {
  [key: string]: {
    [key: string]: string | boolean | number | (string | number)[]
  } | (string | number)[]
}

/**
 * Querystring formatter adapted to 42 api
 */
export const formatQuerystring = (input?: querystringInput) =>
  input ?
    Object.keys(input)
      .map(key => {
        const value = input[key]

        if (value instanceof Array)
          return `${key}=${value.join(',')}`

        else return Object.keys(value)
          .map(subKey => {
            const subValue = value[subKey]
            const formattedSubValue = subValue instanceof Array ?
              subValue.join(',') : subValue

            return `${key}[${subKey}]=${formattedSubValue}`
          })
          .join('&')
      })
      .join('&')
    : ''
