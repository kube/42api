
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
  floor: any,
  row: any,
  post: any,
  host: string,
  campus_id: any,
  user: {
    id: number,
    login: string,
    url: string
  }
}

export type ApiLocations = ApiLocation[]
