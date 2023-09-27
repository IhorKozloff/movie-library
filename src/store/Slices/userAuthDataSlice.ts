import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export interface IUserPersonalCredentials {
    email: string | null;
    token: string | null;
}
export interface IUserAuthData {
    isUserLogin: boolean;
    authData: IUserPersonalCredentials;
}

const initialState: IUserAuthData = {
    isUserLogin: false,
    authData: {
        email: null,
        token: null,
    }
};

export const userAuthDataSlice = createSlice({
    name: 'user-auth-data',
    initialState,
    reducers: {
        changeLoginStatus: (state, action: PayloadAction<boolean>) => {
            state.isUserLogin = action.payload;
        },

        setUserData: (state, action: PayloadAction<IUserPersonalCredentials>) => {
            state.authData = action.payload;
        }
    }
});

export const { changeLoginStatus, setUserData } = userAuthDataSlice.actions;

const userAuthDataPersistConfig = {
    key: 'user-auth-data',
    storage,
};
export const userAuthDataPersistedReducer = persistReducer(userAuthDataPersistConfig, userAuthDataSlice.reducer);