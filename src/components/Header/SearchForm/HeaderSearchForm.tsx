import React from 'react';
import { Formik } from 'formik';
import { IconSVG } from 'Utils/Icons';
import { SearchForm, SearchFormTextArea } from 'components/Header/SearchForm/HeaderSearchForm.styled';

interface IProps {
    setQueryMovie: (movie: string) => void;
}

export const HeaderSearchForm = ({setQueryMovie}: IProps) => {

    return (
        <>
            <Formik initialValues={{movie: ''}} onSubmit={({movie}, actions) => {
                if (movie.trim() === '') {
                    return;
                };

                setQueryMovie(movie);
                actions.resetForm();

            }}>
                <SearchForm className="header-form">
                    <SearchFormTextArea type="text" name="movie" placeholder="Search movie" className="search-input"/>
                    <button 
                        type="submit" 
                        className="search-form-btn
                            bg-inherit border-0 hover:cursor-pointer hover:scale-125 absolute right-0 bottom-1
                        ">
                        <IconSVG id={'search-icon'}/>
                    </button>
                </SearchForm>
            </Formik>
        </>
    );
};