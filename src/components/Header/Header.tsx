import * as headerStyles from 'components/Header/Header.styled';
import { Navigation, SearchBar, Authentication, ThemeSwitcher, MenuButton} from 'components/Header';
import { Container } from 'components';
import { Link } from 'react-router-dom';
import { IconSVG } from 'Utils';
import { useAppSelector } from 'store';
import { useState } from 'react';

export const Header = () => {
    const { pageStatus } = useAppSelector(state => state.userTheme);
    const {HeaderSection, ButtonLink, AuthWrapper } = headerStyles;
    const [activeStatus, setActiveStatus] = useState(false);

    const onBurgerMenuBtnClick = () => {
        setActiveStatus(!activeStatus);
    };

    return (

        <HeaderSection 
            className="header-section 
            w-full flex-center-center pt-10 pb-24 relative bg-no-repeat bg-cover"
            page={pageStatus}
        >
            <Container  className="header-container">
                
                <div className="mb-10 relative flex justify-between items-center">
 
                    <div className="flex items-center">
                        <IconSVG id={'header-logo-icon'}/>
                        <span 
                            className="logo-name 
                                hidden text-white text-center font-medium ml-2.5 
                                tablet:flex tablet:items-center tablet:text-xl tablet:leading-5.5
                                desktop:text-3xl
                            "
                        >Movie Guide Hub</span>
                    </div>

                    <Navigation/>

                    <MenuButton onBtnClick={onBurgerMenuBtnClick} activeStatus={activeStatus}></MenuButton>

                    <AuthWrapper 
                        className="auth-wrapper 
                            only-mobile:bg-no-repeat only-mobile:bg-cover only-mobile:w-screen-60 only-mobile:fixed only-mobile:top-0 only-mobile:right-0 only-mobile:z-2
                            only-mobile:border-y-2 only-mobile:border-l-2 only-mobile:border-solid only-mobile:border-white only-mobile:rounded-tl-xl only-mobile:rounded-bl-xl
                            only-mobile:py-10 only-mobile:px-2.5 only-mobile:h-screen
                            " 
                        activeStatus={activeStatus}
                    >
                        <div 
                            className="auth-content flex items-center only-mobile:w-full only-mobile:h-full only-mobile:border-2 only-mobile:border-solid only-mobile:border-grey only-mobile:rounded-lg only-mobile:p-2.5 only-mobile:flex-col-reverse only-mobile:justify-end only-mobile:items-start desktop:justify-space-between"
                        >
                            <div className="hidden only-mobile:flex-center-center menu-close-button w-7.5 w-7.5 h-7.5 absolute top-12.5 right-5 border-2 border-solid border-white rounded-lg cursor-pointer">
                                <MenuButton onBtnClick={onBurgerMenuBtnClick} activeStatus={activeStatus}></MenuButton>
                            </div>
                                
                            <ul className="extended-menu w-full mt-2.5 tablet:hidden">
                                <li 
                                    className="
                                        extended-menu__item flex justify-start items-center
                                        [&_a]:uppercase [&_a]:text-white [&_a]:text-base [&_a]:font-medium [&_a]:block [&_a]:ml-2.5
                                    ">
                                    <IconSVG className="extended-menu__icon" id={'icon-info'}/>
                                    <Link className="extended-menu__link no-underline font-semibold" to={'/about'}>About us</Link>
                                </li>
                            </ul>    
                            <Authentication/>
                            <ThemeSwitcher/> 
                        </div>                     
                    </AuthWrapper>

                </div>
                    
                {pageStatus === 'home' && <SearchBar/>}

                {pageStatus === 'library' && 
                    <div className="w-full my-0 mx-auto flex justify-between mobile:w-[280px] tablet:w-[287px] minimal:justify-center minimal:gap-4">

                        <ButtonLink to={'/library/watch'}>watch</ButtonLink>
                        <ButtonLink to={'/library/queue'}>queue</ButtonLink>

                    </div>
                }
                    
            </Container>
        </HeaderSection>

    );
};

// бэкграунд в лайбрари
// &.library {
//     background-image: url("/images/headerInLibrary/header-inLibrary-desctop.jpg");
//     & .header-form {
//         opacity: 0;
//         pointer-events: none;
//     }
// }