import { ReactNode } from 'react';

interface IProps {
    children?: ReactNode;
    name?: string;
}

export const FormButton = ({ children, name }: IProps) => {
    return (
        <button
            name={name} 
            type="submit" 
            className={'auth-form-submit-btn border-0 rounded-2xl font-bold text-lg text-center text-white py-[15px] px-0 cursor-pointer active:scale-90'} 
        >
            {children}
        </button>
    );
};
