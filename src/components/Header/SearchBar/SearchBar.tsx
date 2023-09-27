import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderSearchForm } from 'components/Header/SearchForm/HeaderSearchForm';

export const SearchBar = () => {

    const [queryMovie, setQueryMovie] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (queryMovie !== '') {
            navigate(`/search?result=${queryMovie}`);
        }
        return setQueryMovie('');
    },[navigate, queryMovie]);

    return (
        <HeaderSearchForm setQueryMovie={setQueryMovie}/>
    );
};