export interface IPokemonListResponse {
    count: number
    next: string
    previous: null
    results: IPokemonListItem[] //Array
  }

export interface IPokemonListItem {
  name: string
  url: string
}
