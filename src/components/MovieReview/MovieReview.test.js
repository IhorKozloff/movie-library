import { screen, render } from '@testing-library/react';
import { MovieReview } from './MovieReview';
import '@testing-library/jest-dom';
import { voteConverter } from 'Utils';

const props = {
    title: 'Heart of Stone',
    genre_ids: [53, 28],
    vote_average: 6.956,
};

const availableDescriptionTitles = [
    'Vote/Votes',
    'Popularity',
    'Original Title',
    'Genre',
];

describe('when MovieReview component renders with props', () => {
    it('should screen movie title', () => {
        render(<MovieReview data={props}/>);
        
        const heading = screen.getByRole('heading', {
            name: props.title
        });

        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(props.title);
        expect(heading).toHaveClass('font-medium', 'text-xl', 'leading-6');
    });

    it('should screen available description titles', () => {
        render(<MovieReview data={props}/>);

        availableDescriptionTitles.forEach(availableTitleText => {
            const title = screen.getByText(availableTitleText);

            expect(title).toBeInTheDocument();
            expect(title).toHaveClass('movie-review-description-item__name');
        });
    });

    it('should screen vote mark with description value', () => {
        render(<MovieReview data={props}/>);
        const voteMark = screen.getByTitle('vote mark');

        expect(voteMark).toBeInTheDocument();
        expect(voteMark).toHaveClass('vote-mark');
        expect(voteMark).toHaveTextContent(voteConverter(props.vote_average));
    });
});