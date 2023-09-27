import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
    position: fixed;
    background-color: rgba(47, 48, 58, 0.5);
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 10;
`;

export const ModalContent = styled.div`
box-sizing: contant-box;
    position: absolute;
    background-color: #FFF;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: none;
    border: none;
`;
export const ModalCloseBtn = styled.button`
    width: 23px;
    height: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border: none;
    background-color: #FFF;
    position: absolute;
    top: 15px;
    right: 10px;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        
    }
`; 
