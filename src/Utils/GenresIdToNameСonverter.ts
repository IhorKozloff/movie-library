import { GENRES } from 'Constant/Genres';

export const genreСonverter = (genresDataCollection: number[]) => {

    return genresDataCollection.map(item => {
        let searchedGenre = '';

        for (const {id, name} of GENRES) {
            if ( id === item) {
                searchedGenre = name;
            };
        };

        return searchedGenre;
    }).join(', ');
};