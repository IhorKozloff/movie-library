import { setTheme} from '../../../store/Slices/ThemeSlice';
import { IconSVG } from 'Utils/Icons';
import { useAppSelector, useAppDispatch } from 'store';
import { ThemeType } from 'Interfaces/theme-interfaces';

export const ThemeSwitcher = () => {
    const status  = useAppSelector((state) => state.userTheme.theme);
    const dispatch = useAppDispatch();

    const setThemeHandler = (themeOption: ThemeType)  => {
        dispatch(setTheme(themeOption));
    };

    const themeBtnClassnames = 'flex-center-center bg-inherit border-0 cursor-pointer active:scale-90 hover:[&_svg]:fill-yellow';
    return(
        <div className="theme-switcher flex">
            {status === 'light' && <button className={`theme-switcher__button ${themeBtnClassnames}`} type="button" name="setLightTheme" onClick={() => setThemeHandler('dark')}>
                <IconSVG className="theme-switcher__icon" id={'icon-light-theme'}/>
            </button>}
            
            {status === 'dark' && <button className={`theme-switcher__button ${themeBtnClassnames}`} type="button" name="setDarkTheme" onClick={() => setThemeHandler('light')}>
                <IconSVG className="theme-switcher__icon" id={'icon-dark-theme'}/>
            </button>}
        </div>

    );
};
