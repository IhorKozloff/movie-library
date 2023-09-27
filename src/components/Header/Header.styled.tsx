import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import mobileMenuBackground from 'images/mobile-menu-wallpaper.jpg';
// for home
import headerHomeBackgroundDesctop from 'images/header-background-desktop-x1.jpg';
import headerHomeBackgroundTablet from 'images/header-background-tablet-x1.jpg';
import headerHomeBackgroundMobile from 'images/mobile-header-background-1x.jpg';
// for library
import headerLibraryBackgroundDesctop from 'images/headerInLibrary/header-inLibrary-desctop.jpg';
import headerLibraryBackgroundTablet from 'images/headerInLibrary/header-inLibrary-tablet.jpg';
import headerLibraryBackgroundMobile from 'images/headerInLibrary/header-inLibrary-mobile.jpg';
import { PageStatus } from 'Interfaces/theme-interfaces';

interface ILayoutProps {
    page: PageStatus;
}

interface IAuthProps {
    activeStatus: boolean;
}

export const HeaderSection = styled.header`
    background-image: url("${({page}: ILayoutProps) => page === 'library' ? headerLibraryBackgroundMobile : headerHomeBackgroundMobile}");

    @media (min-width: 768px) {
        background-image: url("${({page}: ILayoutProps) => page === 'library' ? headerLibraryBackgroundTablet : headerHomeBackgroundTablet}");
    }
    @media (min-width: 1024px) {
        background-image: url("${({page}: ILayoutProps) => page === 'library' ? headerLibraryBackgroundDesctop : headerHomeBackgroundDesctop}");
    }
`;

export const ButtonLink = styled(NavLink)`
    display: flex;
    width: 100px;
    height: 45px;
    border: 1px solid black;
    cursor: pointer;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    text-decoration: none;
    background-color: #FFF;

        &:hover {
            background-color: #810114;
            color: #FFF;
            box-shadow: 5px 5px 15px 1px #FFF;
            transform: scale(1.1);
        }
        &:active {
            transform: scale(1);
            opacity: 0.7;
            box-shadow: none;
        }
        &.active {
            background-color: #810114;
            color: #FFF
        }
        @media screen and (min-width: 320px) {
            width: 130px;
        }
        @media screen and (min-width: 768px) {
            width: 136px;
        }
`;

export const AuthWrapper = styled.div`

    @media screen and (max-width: 767px) {
        background-image: url("${mobileMenuBackground}");
        ${({activeStatus}: IAuthProps) => activeStatus === true ? 'display: flex;' : 'display: none;'}
    }
    
    @media screen and (min-width: 420px) and (max-width: 499px){
        width: 50vw;
    }
    @media screen and (min-width: 500px) and (max-width: 767px) {
        width: 40vw;
    }
`;