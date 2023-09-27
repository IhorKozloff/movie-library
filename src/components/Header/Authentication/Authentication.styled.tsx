import styled from '@emotion/styled';

export const AuthBtn = styled.button`
    color: #FFF;
    font-size: 12px;
    line-height: 1.16;
    font-weight: 600;
    
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    border: none;
    background: none;

    @media screen and (max-width: 767px) {
        font-size: 16px;
    }
`;

export const EntriesAndLogOutWrapper = styled.div`
   
    margin-top: 30px;

    &.logout {
        flex-direction: row-reverse;
    }

    @media screen and (min-width: 768px) {
        width: 100%;

        display: flex;
        align-items: center;

        margin-right: 10px;
        margin-top: 0;

        &.logout {
            flex-direction: row;
        }
    }
`;
export const AuthBtnList = styled.ul`

    & li {
        margin: 0 0 20px 0;
        text-align: end;
        display: flex;
        justify-content: start;
        align-items: center;
        & button {
            margin-left: 10px;
        }
    }
    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: end;
        align-items: center;

        margin-top: 4px;

        & li {
            & svg {
                display: none;
            }
            margin: 0 0 0 30px;
        }
    }
`;
export const UserEmail = styled.div`
    color: white;
    display: flex;
    align-items: center;
    font-size: 10px;

    @media screen and (min-width: 200px) {
        font-size: 14px;
    }
    @media screen and (min-width: 768px) {
        font-size: 16px;
    }
`;
export const EmailName = styled.p`
`;
export const EmailPrefix = styled.p`
    display: none;

    @media screen and (min-width: 620px) and (max-width: 767px) {
        display: block;
    }
    @media screen and (min-width: 1024px) {
        display: block;
    }
`; 

export const LogoutBtn = styled.button`
    width: 30px;
    height: 30px;
    cursor: pointer;
    border: none;
    transition: transform 500ms ease;
    background: none;
    padding-top: 2px;

    &:active {
        transform: scale(0.9);
    }
    & svg {
        fill: white;
    }
    @media screen and (min-width: 768px) {
        margin-left: 20px;
    }
`;