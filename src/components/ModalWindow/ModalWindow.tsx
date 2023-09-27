import { createPortal } from 'react-dom';
import { IconSVG } from 'Utils';
import { ModalOverlay, ModalContent, ModalCloseBtn } from 'components/ModalWindow/ModalWindow.styled';
import { ReactNode } from 'react';

interface IProps {
    children: ReactNode;
    isCloseBtnActive?: boolean;
    onClose?: () => void;
}
const modalWindowRoot = document.querySelector('#modal-window-root') as HTMLDivElement;

export const ModalWindow = ({children, onClose, isCloseBtnActive = true}: IProps) => {

    return createPortal(
        <ModalOverlay>
            <ModalContent>
                {isCloseBtnActive && <ModalCloseBtn type="button" className="modal-btn-close" onClick={onClose}><IconSVG id={'icon-modal-close-btn'}/></ModalCloseBtn>}
                {children}
            </ModalContent>
            
        </ModalOverlay>, modalWindowRoot
    );
};