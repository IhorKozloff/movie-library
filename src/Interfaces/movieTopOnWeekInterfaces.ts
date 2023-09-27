export interface IMoviesResponse {
    page: number;
    results: IResponsedTopMovie[];
    total_pages: number;
    total_results: number;
}
// poster_path: string;
// title: string;
// genre_ids: number[];
// release_date: string;
// vote_average: number;
// id: number;
// vote_count?: number;
// popularity?: number;
// overview?: string;
export interface IResponsedTopMovie {
    adult: boolean;
    backdrop_path: string;
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export type CustomTopMovie = Pick<IResponsedTopMovie, 'poster_path' | 'title' | 'genre_ids' | 'release_date' | 'vote_average' | 'id'>
export type CustomTopMoviesResponse = Omit<IMoviesResponse, 'results'> & {results: CustomTopMovie[]}

export interface IMovieItemCard extends CustomTopMovie {
    vote_count?: number;
    popularity?: number;
    overview?: string;
}
