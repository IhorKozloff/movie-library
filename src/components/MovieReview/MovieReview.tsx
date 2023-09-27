import { posterGuard, genreСonverter, voteConverter } from 'Utils';
import { CustomMovieReviewResponse } from 'Interfaces';
import { ReactNode } from 'react';
import { useAppSelector } from 'store';

interface IProps {
  data: CustomMovieReviewResponse;
  children?: ReactNode
}

export const MovieReview = ({data, children}: IProps) => {
    const themeStatus = useAppSelector(state => state.userTheme.theme);

    const {poster_path, title, vote_average, genre_ids, vote_count, popularity, overview} = data;
    const themeTextColorClassnames = themeStatus === 'dark' ? 'text-white':'text-black';

    return (
        
        <div className="w-full mb-5 tablet:flex tablet:gap-x-8">
            <div className="relative mb-8 tablet:mb-0">
                <img 
                    src={posterGuard(poster_path, 'large')} 
                    alt="movie-poster"
                    className="block w-full h-[375px] mobile:w-70 mobile:h-auto tablet:w-[264px] desktop:w-[400px]"    
                />
            </div>

            <div className="inform-block">

                <h2 className={`font-medium text-xl leading-6 ${themeTextColorClassnames}`}>
                    {title}
                </h2>

                <ul className="my-5 flex flex-col gap-y-2.5">

                    <li className="movie-review-description-item">
                        <p className="movie-review-description-item__name">Vote/Votes</p>
                        <div className="movie-review-description-item__value">
                            <span title="vote mark" className="vote-mark">{voteConverter(vote_average)}</span>
                            <span className={`${themeTextColorClassnames}`}>/ {vote_count}</span>
                        </div>
                    </li>

                    <li className="movie-review-description-item">
                        <p className="movie-review-description-item__name">Popularity</p>
                        <p className={`movie-review-description-item__value ${themeTextColorClassnames}`}>{popularity}</p>
                    </li>

                    <li className="movie-review-description-item">
                        <p className="movie-review-description-item__name">Original Title</p>
                        <p className={`movie-review-description-item__value uppercase ${themeTextColorClassnames}`}>{title}</p>
                    </li>

                    <li className="movie-review-description-item">
                        <p className="movie-review-description-item__name">Genre</p>
                        <p className={`movie-review-description-item__value ${themeTextColorClassnames}`}>{genreСonverter(genre_ids)}</p>
                    </li>

                </ul>
            
                <div className="font-medium text-xs leading-5">
                    <p className="text-left">ABOUT</p>
                    <p className={`mt-[10px] text-left ${themeTextColorClassnames}`}>{overview}</p>
                </div>
                
                {children}
            </div>
        </div>
    );
};