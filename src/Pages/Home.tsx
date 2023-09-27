import { useLocation } from 'react-router-dom';
import { MovieListComponent, MoreButton } from 'components';
import { useTopMoviesData } from 'Hooks/useTopMoviesData';
import { setPageStatus, useAppDispatch, useAppSelector } from 'store';
import { useEffect } from 'react';

export default function Home () {
    
    const location = useLocation();
    const dispatch = useAppDispatch(); 
    const pageStatus = useAppSelector(state => state.userTheme.pageStatus);
    const {topMovieListData, loadMoreAction, moreBtnVisible} = useTopMoviesData();

    useEffect(() => {
        if (pageStatus === 'home') {
            return;
        } else {
            dispatch(setPageStatus('home'));
        }
    }, [dispatch, pageStatus]);

    return (
        <>
            {topMovieListData && <MovieListComponent data={topMovieListData} state={{from: location}}/>}
            {moreBtnVisible && 
                <>
                    <div className="flex-center-center">
                        <MoreButton onMoreBtnCLick={loadMoreAction}>Load More</MoreButton>
                    </div>
                </>
            }
        </>
    );   
};