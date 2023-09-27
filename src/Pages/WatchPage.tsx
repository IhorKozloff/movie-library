import { useLocation } from 'react-router-dom';
import {MovieListComponent} from 'components';
import { useAppSelector } from 'store';

export default function WatchPage () {

    const movieList = useAppSelector(state => state.userLibrary.watched);
    const location = useLocation(); 

    return (
        <>
            {movieList.length !== 0 && <MovieListComponent data={movieList} state={{from: location}}/>}
        </>
    );   
};