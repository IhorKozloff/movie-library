import { AuthorizedContent, UnAuthorizedContent } from './AuthContent';
import { useAppSelector } from 'store';

export const Authentication = () => {

    const userAuthData = useAppSelector(state => state.userAuthData);

    return(
        <>
            {userAuthData.isUserLogin && <AuthorizedContent/>} 
            {userAuthData.isUserLogin === false && <UnAuthorizedContent/>}
        </>
    );
};