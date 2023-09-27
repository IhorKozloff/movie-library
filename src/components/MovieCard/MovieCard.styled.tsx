import styled from '@emotion/styled';
import { ThemeType } from 'Interfaces/theme-interfaces';

interface IProps {
    themeStyle: ThemeType
}

export const CardDescription = styled.div`
    background-color: ${(props: IProps) => props.themeStyle === 'light' ? 'transparent' : '#95949A'};
`;   

export const MovieReleaseDelimeter = styled.span`
    background-color: ${(props: IProps) => props.themeStyle === 'light' ? '#FF6B01' : '#C55206'};
`;
export const MovieRelease = styled.span`
    color: ${(props: IProps) => props.themeStyle === 'light' ? '#FF6B01' : '#C55206'};
`;
export const MovieRating = styled.span`
    // background-color: ${(props: IProps) => props.themeStyle === 'light' ? '#FF6B01' : '#C55206'};
`;
export const MovieGenres = styled.span`
    color: ${(props: IProps) => props.themeStyle === 'light' ? '#FF6B01' : '#C55206'};
`;
