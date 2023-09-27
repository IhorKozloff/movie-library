import { IconSVG } from 'Utils';
import { useAppSelector } from 'store';

interface IProps {
    onBackBtn: () => void; 
}
export const GoBackBtn = ({onBackBtn}: IProps) => {
    const themeStatus = useAppSelector(state => state.userTheme.theme);

    const themeBtnTextClassNames = themeStatus === 'dark' ? 'text-white':'text-black'; 
    const themeBtnIconClassNames = themeStatus === 'dark' ? 'fill-white':'fill-black'; 

    return (
        <div className="flex-center-center absolute z-10 top-1">

            <button
                type="button" 
                onClick={onBackBtn} 
                className="bg-transparent border-0 w-8 h-7 flex-center-center cursor-pointer group" 
            >
                <IconSVG 
                    id={'icon-circle-left'}
                    className={`fill-white group-hover:fill-green-500 transition-colors duration-300 tablet:${themeBtnIconClassNames}`}
                />
            </button>

            <p className={`ml-1 font-extrabold text-white tablet:${themeBtnTextClassNames}`}>
                Go Back
            </p>
        </div>
    );     
};