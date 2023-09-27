import { useState } from 'react';
import { CustomMovieReviewResponse } from 'Interfaces';
import { useAppSelector, useAppDispatch, addToWatched, removeFromWatchedById, addToQueue, removeFromQueueById } from 'store';

interface IProps {
    currentMovie: CustomMovieReviewResponse,
    className?: string;
}
type btnInitialFn = (state:CustomMovieReviewResponse[], movie:CustomMovieReviewResponse) => boolean;

const ctrlBarBtnInitial: btnInitialFn = (state, movie) => {
    //return state.includes
    if (state.find(item => item.id === movie.id)) {
        return true;
    }
    return false;
};

export const ControlBar = ({currentMovie, className}:IProps) => {
    const dispatch = useAppDispatch();
    const {watched, queue} = useAppSelector(state => state.userLibrary);

    const [watchedBtnStatus, setWatchedStatus] = useState(ctrlBarBtnInitial(watched, currentMovie));
    const [queueBtnStatus, setQueueStatus] = useState(ctrlBarBtnInitial(queue, currentMovie));

    const onWatchedBtnClick = () => {

        if (watchedBtnStatus) {
            //удаляем
            dispatch(removeFromWatchedById(currentMovie.id));
        } else {
            //добавляем
            dispatch(addToWatched(currentMovie));
        }
        setWatchedStatus(!watchedBtnStatus);
        
    };

    const onQueueBtnClick = () => {

        if (queueBtnStatus) {
            //удаляем
            dispatch(removeFromQueueById(currentMovie.id));
        } else {
            //добавляем
            dispatch(addToQueue(currentMovie));
        }
        setQueueStatus(!queueBtnStatus);
        
    };

    return (
        <div className={className}>
            <button
                type="button" 
                onClick={onWatchedBtnClick}
                className={`library-control-button ${watchedBtnStatus ? 'bg-customOrange text-white' : 'bg-white text-black'}`}
            >
                {watchedBtnStatus === false ? 'add to ' : 'remove from '}watched
            </button>

            <button 
                type="button" 
                onClick={onQueueBtnClick}
                className={`library-control-button ${queueBtnStatus ? 'bg-customOrange text-white' : 'bg-white text-black'}`}
            >
                {queueBtnStatus === false ? 'add to ' : 'remove from '}queue
            </button>
        </div>
    );
};