import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
    color: inherit;
    font-size: 12px;
    line-height: 1.16;
    font-weight: 500;
    text-transform: uppercase;
    position: relative;
    text-decoration: none;
    &.active {
        &::after {
            content: '';
            width: 100%;
            height: 3px;
            background-color: #FF6B08;
            position: absolute;
            bottom: 0;
            left: 0;
        }
    }
`;