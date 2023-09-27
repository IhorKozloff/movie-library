import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserRegisterData, UserLoginData, AuthorizedUserData } from 'Interfaces/authApiInterfaces';

const BASE_URL = 'https://wallet-8d2r.onrender.com/api/auth-api/';

export const authApi = createApi({
    reducerPath: 'userAuthorizationApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),

    endpoints: (builder) => ({
        
        userRegister: builder.mutation<AuthorizedUserData, UserRegisterData>({

            query: (userRegisterData) => ({
                url: 'register',
                method: 'POST',
                body: userRegisterData,
                transformResponse: (response: { user: AuthorizedUserData}) => {
                    return {
                        ...response.user
                    };
                }
            }),
        }),

        userLogin: builder.mutation<AuthorizedUserData, UserLoginData>({

            query: (userLoginData) => ({
                url: 'login',
                method: 'POST',
                body: userLoginData,
            }),
        }),

        userLogout: builder.mutation<any, any>({

            query: (token:string) => ({
                url: 'logout',
                method: 'GET',
                headers: {Authorization: `Bearer ${token}`}
            }),
        })
    })

});

export const { useUserRegisterMutation, useUserLoginMutation, useUserLogoutMutation } = authApi;