export interface IUserAuth {
    name: string;
    email: string;
    password: string;
    token: string;
}

export type UserRegisterData  = Omit<IUserAuth, 'token'>
export type UserLoginData = Pick<IUserAuth, 'email' | 'password'>
export type AuthorizedUserData = Omit<IUserAuth, 'password'>