import styled from '@emotion/styled';
import { ThemeType } from 'Interfaces/theme-interfaces';

interface IProps {
    themeStyle: ThemeType;
}

export const MovieListItem = styled.li`
    border:${(props: IProps) => props.themeStyle === 'light' ? 'none' : '1px solid #95949A'};
`;