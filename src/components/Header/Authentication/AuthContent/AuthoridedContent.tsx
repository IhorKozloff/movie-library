import { useAppDispatch, useAppSelector, useUserLogoutMutation } from 'store';
import { EntriesAndLogOutWrapper, LogoutBtn, UserEmail, EmailName, EmailPrefix } from '../Authentication.styled';
import { emailSeparate, IconSVG } from 'Utils';
import { useEffect } from 'react';
import { changeLoginStatus, setUserData } from 'store/Slices/userAuthDataSlice';

export const AuthorizedContent = () => {
    const dispatch = useAppDispatch();
    const userAuthData = useAppSelector(state => state.userAuthData);

    const [userLogOut, logOutResult] = useUserLogoutMutation();

    const onLogoutBtn = () => {
        userLogOut(userAuthData.authData.token);
    };

    useEffect(() => {
        if (logOutResult.isSuccess && userAuthData.isUserLogin) {
            dispatch(changeLoginStatus(false));
            dispatch(setUserData({
                email: null,
                token: null,
            }));
        }
    },[dispatch, logOutResult.isSuccess, userAuthData.isUserLogin]);

    const { emailName, emailPrefix} = emailSeparate(userAuthData.authData.email!);

    return (
        <EntriesAndLogOutWrapper className="entries-and-logout-wrapper logout">
            <UserEmail className="user-email-wrapper">
                <EmailName className="user-email__name">{emailName}</EmailName>
                <EmailPrefix className="user-email__prefix">@{emailPrefix}</EmailPrefix>
            </UserEmail>
            
            <LogoutBtn className="logout-btn" onClick={onLogoutBtn}>
                <IconSVG className="logout-btn__icon" id={'icon-logout'}></IconSVG>
            </LogoutBtn> 
        </EntriesAndLogOutWrapper>
    );
};