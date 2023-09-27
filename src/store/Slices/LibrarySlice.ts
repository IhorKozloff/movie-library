import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CustomMovieReviewResponse } from '../../Interfaces';
import {
    persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

interface ILibrary {
    watched: CustomMovieReviewResponse[];
    queue: CustomMovieReviewResponse[];
}

const initialState: ILibrary = {
    watched: [],
    queue: []
};

export const librarySlice = createSlice({
    name: 'user-library',
    initialState,
    reducers: {
        addToWatched: (state, action: PayloadAction<CustomMovieReviewResponse>) => {
            state.watched.push(action.payload);
        },
        removeFromWatchedById: (state, action:PayloadAction<number>) => {
            state.watched = state.watched.filter(item => item.id !== action.payload);
        },
        addToQueue: (state, action: PayloadAction<CustomMovieReviewResponse>) => {
            state.queue.push(action.payload);
        },
        removeFromQueueById: (state, action:PayloadAction<number>) => {
            state.queue = state.queue.filter(item => item.id !== action.payload);
        },
    }
});

export const { addToWatched, removeFromWatchedById, addToQueue, removeFromQueueById } = librarySlice.actions;

const userLibraryPersistConfig = {
    key: 'userLibrary',
    storage,
};
export const userLibraryPersistedReducer = persistReducer(userLibraryPersistConfig, librarySlice.reducer);
