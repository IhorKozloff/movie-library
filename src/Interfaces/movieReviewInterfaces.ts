
export interface BelongsToCollection {
        id: number;
        name: string;
        poster_path: string;
        backdrop_path: string;
    }

export interface Genre {
        id: number;
        name: string;
    }

export interface ProductionCountry {
        iso_3166_1: string;
        name: string;
    }

export interface SpokenLanguage {
        english_name: string;
        iso_639_1: string;
        name: string;
    }

export interface IGetMovieReviewResponse {
        adult: boolean;
        backdrop_path: string;
        belongs_to_collection: BelongsToCollection;
        budget: number;
        genres: Genre[];
        homepage: string;
        id: number;
        imdb_id: string;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        production_companies: any[];
        production_countries: ProductionCountry[];
        release_date: string;
        revenue: number;
        runtime: number;
        spoken_languages: SpokenLanguage[];
        status: string;
        tagline: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
    }

export type CustomMovieReviewResponse = Pick<IGetMovieReviewResponse, 'poster_path' | 'title' | 'vote_average' | 'vote_count' | 'popularity' | 'overview' | 'id' | 'release_date'> & {genre_ids: number[]}
