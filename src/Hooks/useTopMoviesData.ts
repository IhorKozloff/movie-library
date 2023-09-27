import {useState, useEffect } from 'react';
import { useGetTopMoviesOnWeekQuery } from 'store';
import { CustomTopMovie } from 'Interfaces';

//type movieListDataCreatorFn = (currentData: CustomTopMovie[], newData: CustomTopMovie[], setter: (newState:CustomTopMovie[]) => void) => void;

const movieListDataCreator = (currentData: CustomTopMovie[], newData: CustomTopMovie[], setter: (newState:CustomTopMovie[]) => void) => {
    
    if (currentData.length === 0) {
        setter(newData);
    } 
    else {

        const stateIds = currentData.map(item => item.id);

        const matchСheck = newData.find(item => stateIds.includes(item.id));

        if (!matchСheck) {
            setter([...currentData, ...newData]);
        };
    }; 
};

export const useTopMoviesData = () => {
    
    const [currentPage, setCurrentPage] = useState(1);
    const [topMovieListData, setTopMovieListData] = useState<CustomTopMovie[]>([]);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {data, isLoading, isSuccess, isError, isFetching} = useGetTopMoviesOnWeekQuery(currentPage);

    useEffect(() => {
        if (!data) {
            return;
        }
 
        if(data?.results?.length !== 0) {
            movieListDataCreator(topMovieListData, data.results, setTopMovieListData);
            //handleMoreBtnStatus(currentPage, data.total_pages, setMoreBtnStatus);
        }
    }, [data, topMovieListData]);

    const moreBtnVisible = !isFetching || !isLoading || !isError;

    const loadMoreAction = () => {
        setCurrentPage(currentPage + 1);
    };

    return {
        topMovieListData, 
        loadMoreAction, 
        moreBtnVisible: moreBtnVisible && data?.total_pages !== data?.page
    };
};