import React from 'react';
import { MovieCard } from 'components';
import { MovieListItem } from 'components/MovieList/MovieListComponent.styled';
import { Link } from 'react-router-dom';
import { releaseDateConverter, genreСonverter, posterGuard, voteConverter } from 'Utils';
import { useAppSelector } from 'store';
import { CustomTopMovie } from 'Interfaces';

interface IProps {
    data: CustomTopMovie[];
    
    state: {
        from: {
            hash: string;
            key: string;
            pathname: string;
            search: string;
            state?: any;
        };
    }
}
export const MovieListComponent = ({data, state}:IProps) => {

    const status  = useAppSelector((state) => state.userTheme.theme);

    return (
        <ul className="mb-10 -mt-5 tablet:-mx-[15px] tablet:flex tablet:flex-row tablet:flex-wrap">
            {data.map(({poster_path, title, genre_ids, release_date, vote_average, id}) => {
                return (

                    <MovieListItem  
                        key={id} 
                        themeStyle={status}
                        className="group cursor-pointer mt-2 f-full hover:drop-shadow-md min-[280px]:w-[280px] tablet:mx-[15px] tablet:w-[calc((100%-4*15px)/2)] desktop:w-[calc((100%-6*15px)/3)]"
                    >
                        <Link 
                            to={`/movies/${id}`} 
                            state={state}
                            className="no-underline text-black block"
                        >
                            <MovieCard 
                                poster={posterGuard(poster_path, 'small')} 
                                title={title} 
                                genre={genreСonverter(genre_ids)} 
                                releaseDate={release_date ? releaseDateConverter(release_date) : 'release date unknown'} 
                                vote_average={voteConverter(vote_average)} 
                            />
                        </Link>
                    
                    </MovieListItem>
                    
                );
            })}
        </ul>
    );
};
//poster_path !== null ? `https://image.tmdb.org/t/p/original${poster_path}` : `${onNoPoster}`