import { Genre } from 'Interfaces';

export const movieReviewGenresConverter = (data: Genre[]) => {

    return data.map(item => {
        return item.name;
    }).join(', ');
};  