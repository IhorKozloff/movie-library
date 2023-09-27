import { AuthBtn, EntriesAndLogOutWrapper, AuthBtnList } from '../Authentication.styled';
import { IconSVG } from 'Utils';
import { ModalWindow, LoginForm, RegisterForm } from 'components';
import { useState, useEffect } from 'react';
import { UserLoginData, UserRegisterData } from 'Interfaces/authApiInterfaces';

import { notifySuccess } from 'Utils';
import { useAppDispatch, useAppSelector, useUserLoginMutation, useUserRegisterMutation } from 'store';
import { changeLoginStatus, setUserData } from 'store/Slices/userAuthDataSlice';
import {  toast } from 'react-toastify';
import { Hourglass } from 'react-loader-spinner';

interface IErrorData {
    status: number,
    message: string
}

export const UnAuthorizedContent = () => {
    const dispatch = useAppDispatch();
    const userAuthData = useAppSelector(state => state.userAuthData);

    const [userLogin, loginResult ] = useUserLoginMutation();
    const [userRegister, registerResult ] = useUserRegisterMutation();

    const [authData, setAuthData] = useState<UserRegisterData | null>(null);

    const [loginFormActiveStatus, SetLoginFormActiveStatus] = useState(false);
    const [registerFormActiveStatus, SetRegisterFormActiveStatus] = useState(false);

    const openAuthForm = (btnName:string) => {

        switch(btnName) {
        case 'login':
            SetLoginFormActiveStatus(true);
            break;

        case 'register':
            SetRegisterFormActiveStatus(true);
                    
            break;   
        default:
            console.log('incorrect target name');
        }
    };

    const closeAuthForm = () => {
        SetLoginFormActiveStatus(false);
        SetRegisterFormActiveStatus(false);
    };

    useEffect(() => {
        if (registerResult.isSuccess && userAuthData.isUserLogin === false && authData !== null) {
            notifySuccess('Register successful!');
            userLogin({
                email: authData.email,
                password: authData.password
            });
            setAuthData(null);
        }
    },[authData, registerResult.isSuccess, userAuthData.isUserLogin, userLogin]);

    useEffect(() => {
        if(loginResult.isSuccess && loginResult.data && authData === null) {

            dispatch(changeLoginStatus(true));
            dispatch(setUserData({
                email: loginResult.data.email,
                token: loginResult.data.token,
            }));
        }
        
    },[authData, dispatch, loginResult.data, loginResult.isSuccess]);

    useEffect(() => {

        if(loginResult.error !== undefined && 'data' in loginResult.error) {

            try {
                toast.error(`${(loginResult.error.data as IErrorData).message}`, {
                    position: toast.POSITION.TOP_RIGHT
                });
            } catch {
                toast.error('Oops, something wrong. Check your data please.', {
                    position: toast.POSITION.TOP_RIGHT
                });
            } finally {
                loginResult.reset();
            }
            
        }
    });
    useEffect(() => {
        if(registerResult.error !== undefined && 'data' in registerResult.error) {

            try {
                toast.error(`${(registerResult.error.data as IErrorData).message}`, {
                    position: toast.POSITION.TOP_RIGHT
                });
            } catch {
                toast.error('Oops, something wrong. Check your data please.', {
                    position: toast.POSITION.TOP_RIGHT
                });
            } finally {
                registerResult.reset();
            }
            
        }
    });

    async function onSubmitRegisterForm (data: UserRegisterData) {
        setAuthData(data);
        SetRegisterFormActiveStatus(false); 
        userRegister(data);  
    };

    async function onSubmitLoginForm (data: UserLoginData) {
        userLogin(data);
        SetLoginFormActiveStatus(false);
    };

    return (
        <EntriesAndLogOutWrapper className="entries-and-logout-wrapper">
            {(loginResult.isLoading || registerResult.isLoading) && 
                <ModalWindow isCloseBtnActive={false}>
                    <Hourglass
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="hourglass-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        colors={['#306cce', '#72a1ed']}
                    />
                </ModalWindow>
            }
            <AuthBtnList className="auth-btn__list">
                <li className="auth-btn__item">
                    <IconSVG className="auth-btn__item-icon" id={'icon-login'}/>
                    <AuthBtn className="auth-btn__item-button" type="button" name="login" onClick={() => openAuthForm('login')}>login</AuthBtn>
                </li>
                <li className="auth-btn__item">
                    <IconSVG className="auth-btn__item-icon" id={'icon-register'}/>
                    <AuthBtn className="auth-btn__item-button" type="button" name="register" onClick={() => openAuthForm('register')}>register</AuthBtn>
                </li>
            </AuthBtnList>

            {loginFormActiveStatus && <ModalWindow onClose={closeAuthForm}>
                <LoginForm onSubmitLoginForm={onSubmitLoginForm}/>
            </ModalWindow>}
            {registerFormActiveStatus && <ModalWindow onClose={closeAuthForm}>
                <RegisterForm onSubmitRegisterForm={onSubmitRegisterForm}/>
            </ModalWindow>}
        </EntriesAndLogOutWrapper>
    );
};