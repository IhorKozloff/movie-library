import { useParams, useLocation, useNavigate} from 'react-router-dom';
import { MovieReview, ControlBar, GoBackBtn, MovieTrailer } from 'components';
import { useGetMovieReviewQuery } from 'store';

interface stateType {
    from: { pathname: string }
}

export default function MovieDetailPage () {

    const location = useLocation();
    const navigate = useNavigate();
    const {movieId} = useParams();

    const { data: reviewData } = useGetMovieReviewQuery(movieId, {
        skip: movieId === undefined
    });

    const onBackBtn = () => {
        navigate((location?.state as stateType).from ?? '/');
    };

    return (
        <div className="relative tablet:pt-10 tablet:px-7 desktop:pt-[50px]">
            <GoBackBtn onBackBtn={onBackBtn}/>
                    
            {reviewData && 
                <MovieReview data={reviewData}>
                    <ControlBar currentMovie={reviewData} className="flex justify-between mt-3 desktop:justify-start gap-x-3"/>
                </MovieReview>}
            {reviewData && <MovieTrailer movieId={reviewData?.id}/>}
        </div>
    );
};