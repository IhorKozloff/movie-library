import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PageStatus, ThemeType } from 'Interfaces/theme-interfaces';
import {
    persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

interface IThemeSlice {
    theme: ThemeType;
    pageStatus: PageStatus;
}

const initialState: IThemeSlice = {
    theme: 'light',
    pageStatus: 'home',
};

export const themeSlice = createSlice({
    name: 'user-theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<ThemeType>) => {
            state.theme = action.payload;
        },

        setPageStatus: (state, action: PayloadAction<PageStatus>) => {
            state.pageStatus = action.payload;
        }
    }
});

export const { setTheme, setPageStatus } = themeSlice.actions;

const themePersistConfig = {
    key: 'theme',
    storage,
};
export const themePersistedReducer = persistReducer(themePersistConfig, themeSlice.reducer);
