import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMoviesResponse, CustomTopMoviesResponse, IGetMovieReviewResponse, CustomMovieReviewResponse } from 'Interfaces';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '8b9c2b35d1bc0d9e8879c4faa9dd8b75';

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),

    endpoints: (builder) => ({

        getTopMoviesOnWeek: builder.query<CustomTopMoviesResponse, number>({
            query: (page) => ({
                url: 'trending/movie/week',
                params: {
                    api_key: API_KEY,
                    page
                }
            }),

            transformResponse: (response: IMoviesResponse) => {

                const newArr =  response.results.map(item => {
                    return {
                        poster_path: item.poster_path,
                        title: item.title,
                        genre_ids: item.genre_ids,
                        release_date: item.release_date,
                        vote_average: item.vote_average, 
                        id: item.id
                    }; 
                });
                return {...response, results: newArr};
            },

        }),
        getMovieReview: builder.query<CustomMovieReviewResponse, string | undefined>({
            query: (movieID) => ({
                url: `movie/${movieID}`,
                params: {
                    api_key: API_KEY,
                    language: 'en-US'
                }
            }),
            transformResponse: ({poster_path, title, vote_average, genres, vote_count, popularity, overview, id, release_date}:IGetMovieReviewResponse) => {

                const customResponse = {
                    poster_path, 
                    title, 
                    vote_average, 
                    genre_ids: genres.map(item => item.id), 
                    vote_count, 
                    popularity, 
                    overview,
                    id,
                    release_date
                };
                return customResponse;
            }
        }),
        getSearchMovies: builder.query<CustomTopMoviesResponse, {name: string, page: number}>({
            query: ({name, page}) => ({
                url: 'search/movie',
                params: {
                    api_key: API_KEY,
                    query: name,
                    page
                }
            }),
            transformResponse: (response: IMoviesResponse) => {

                const newArr =  response.results.map(item => {
                    return {
                        poster_path: item.poster_path,
                        title: item.title,
                        genre_ids: item.genre_ids,
                        release_date: item.release_date,
                        vote_average: item.vote_average, 
                        id: item.id
                    }; 
                });
                return {...response, results: newArr};
            },
        })
    })
});
export const { useGetTopMoviesOnWeekQuery, useGetMovieReviewQuery, useGetSearchMoviesQuery } = moviesApi;
