import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import  Layout  from 'Pages/Layout';
import LibraryPage from 'Pages/LibraryPage';

// import  Home  from "Pages/Home";
const Home = lazy(() => import('Pages/Home'));

//import  Search  from "Pages/Search";
const Search = lazy(() => import('Pages/Search'));

//import MovieDetailPage from "Pages/MovieDetailPage";
const MovieDetailPage = lazy(() => import('Pages/MovieDetailPage'));

// import WatchPage from "Pages/WatchPage";
const WatchPage = lazy(() => import('Pages/WatchPage'));

// import QueuePage from "Pages/QueuePage";
const QueuePage = lazy(() => import('Pages/QueuePage'));

export const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
              
                <Route index element={<Home/>}/>

                <Route path="search" element={<Search/>}/>

                <Route path="movies/:movieId" element={<MovieDetailPage/>}/>

            </Route>
            
            <Route path="library" element={<LibraryPage/>}>
                <Route path="watch" element={<WatchPage/>}/>
                <Route path="queue" element={<QueuePage/>}/>
            </Route>
        </Routes>
    );
};
