import { ReactNode } from 'react';

interface IProps {
    children: ReactNode;
    onMoreBtnCLick: () => void;
}

export const MoreButton = ({children, onMoreBtnCLick}: IProps) => {
    return (

        <button 
            type="button" 
            onClick={onMoreBtnCLick}
            className="
                    w-36 h-11 font-bold border-0 rounded-md cursor-pointer 
                    uppercase text-gray-500 relative group overflow-hidden
                    hover:bg-customOrange 
                    hover:text-white
                    hover:-translate-y-0.5 
                    hover:shadow-lg
                    hover:shadow-gray-800/50
                    active:translate-y-0
                    active:shadow-md
                    active:shadow-gray-800/30
                    transition-all
                    duration-300
                "
        >
            <span className="w-full h-2.5 bg-white absolute -top-3 left-0 group-hover:translate-y-[60px] transition-all duration-200"/>
            {children}
        </button>
        
    );
};