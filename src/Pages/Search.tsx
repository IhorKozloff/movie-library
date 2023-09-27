import {useState, useEffect} from 'react';
import { useSearchParams, useLocation, Outlet} from 'react-router-dom';
import { MovieListComponent, PaginationBar } from 'components';
import { useGetSearchMoviesQuery } from 'store';

export default function Search () {
    const [searchParams] = useSearchParams();
    const location = useLocation();

    const [currentPage, setCurrentPage] = useState(1);

    const { data } = useGetSearchMoviesQuery({name: searchParams.get('result')!, page: currentPage}, {
        skip: searchParams.get('result') === null
    });

    useEffect(() => {

        if (searchParams.get('result') !== null) {
            setCurrentPage(1);
        }
    }, [searchParams]);

    return (
        <>
            {data && <MovieListComponent data={data?.results} state={{from: location}}/>}
            <PaginationBar totalPages={data?.total_pages || 1} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            <Outlet/>
        </>
        
    );   
};
