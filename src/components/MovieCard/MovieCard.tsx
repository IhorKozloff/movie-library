import React from 'react';
import { MovieReleaseDelimeter, MovieRelease, MovieRating, CardDescription, MovieGenres } from 'components/MovieCard/MovieCard.styled'; 
import { useAppSelector } from 'store';
   
interface IProps {
    poster: string; title: string; genre: string; releaseDate: string; vote_average: string
}

export const MovieCard = ({poster, title, genre, releaseDate, vote_average}: IProps) => {

    const status  = useAppSelector((state) => state.userTheme.theme);

    return (
        <>
            <div className="w-full overflow-hidden">
                <img 
                    src={poster} 
                    loading={'lazy'} 
                    alt={`${title ? title : 'movie'}-poster`}
                    className="block w-full h-auto group-hover:scale-110 transition-transform duration-300"
                /> 
            </div>
            
            <CardDescription themeStyle={status} className="h-[55px] flex flex-col items-left justify-between pt-2.5 bg-transparent">

                <h4 className="uppercase text-start">{title}</h4>

                <div className="font-medium text-xs flex items-end justify-start">

                    <MovieGenres className="text-start" themeStyle={status}>{genre}</MovieGenres>
                    <MovieReleaseDelimeter className="content-none w-px h-4 block ml-1.5" themeStyle={status}/>
                    <MovieRelease className="ml-1.5 relative" themeStyle={status}>{releaseDate}</MovieRelease>
                    <MovieRating className="ml-2.5 vote-mark" themeStyle={status}>{vote_average}</MovieRating>

                </div>
            </CardDescription>
        </>
    );
};