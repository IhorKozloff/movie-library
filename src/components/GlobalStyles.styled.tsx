import styled from '@emotion/styled';
import { ThemeType } from 'Interfaces/theme-interfaces';
import darkThemeWallpaper from 'images/dark-theme-bg.jpg';

interface IProps {
    backgroundTheme: ThemeType;
}

export const Section = styled.section`
${(props: IProps) => {
        if (props.backgroundTheme === 'light') {
            return 'background:#fff';
        } else {
            return `background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("${darkThemeWallpaper}");`;
        }
    }};
    padding-top: 20px;
    padding-bottom: 40px;
    min-height: 83vh;
    
    @media screen and (min-width: 768px) {
        padding-top: 60px;
        padding-bottom: 50px;
    }
`;

export const Container = styled.div`

    margin: 0 auto;
    width: 100%;
    &.header-container {
        background: none;
    }

    @media (min-width: 320px) {
        width: 280px;
        //border: 1px solid black;
    }
    @media (min-width: 768px) {
        width: 620px;
    }
    @media (min-width: 1024px) {
        width: 882px;
    }
    
`;
