
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

export type ApiLocation = {
  id: number,
  begin_at: string,
  end_at: string,
  primary: boolean,
  floor: number,
  row: number,
  post: number,
  host: string,
  campus_id: number,
  user: {
    id: number,
    login: string,
    url: string
  }
}

export type ApiLocations = ApiLocation[]
