import { configureStore } from '@reduxjs/toolkit';

import { themePersistedReducer } from './Slices/ThemeSlice';
import { userLibraryPersistedReducer } from './Slices/LibrarySlice';
import { userAuthDataPersistedReducer } from './Slices/userAuthDataSlice';

import { authApi } from './Api/authApi';
import { moviesApi } from './Api/moviesApi';

import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

export const eyeshieldStore = configureStore({
    
    reducer: {
        userAuthData: userAuthDataPersistedReducer,
        userTheme: themePersistedReducer,
        userLibrary: userLibraryPersistedReducer,
        userAuthorizationApi: authApi.reducer,
        moviesApi: moviesApi.reducer
    },

    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }), authApi.middleware, moviesApi.middleware]
});

type IStore = ReturnType<typeof eyeshieldStore.getState>;
type AppDispatch = typeof eyeshieldStore.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<IStore> = useSelector;

export const persistor = persistStore(eyeshieldStore);

export * from './Slices/LibrarySlice';
export * from './Slices/ThemeSlice';
export * from './Api/authApi';
export * from './Api/moviesApi';