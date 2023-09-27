import styled from '@emotion/styled';

interface IProps {
    active?: boolean
}

export const PaginationListItem = styled.li`
    background-color: ${(props: IProps) => props.active === true ? 'tomato' : 'grey'};
    padding-top: 3px;
    padding-bottom: 3px;
    border-radius: 5px;
    margin-right: 5px; 

    &.background-none {
        background: none;
        padding-bottom: 0;
        & button {
            color: grey;
            font-weight: bolder;
        }
    }
`;