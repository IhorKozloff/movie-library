import { IconSVG } from 'Utils';

interface IProps {
    activeStatus: boolean;
    onBtnClick: () => void;
}
export const MenuButton = ({activeStatus, onBtnClick}: IProps) => {

    return (
        <button 
            type="button" 
            onClick={onBtnClick}
            className="p-0 w-[32px] h-[32px] border-0 bg-transparent flex-center-center fill-white overflow-hidden tablet:hidden active:scale-90"
        >
            {activeStatus === false && <IconSVG id={'burger-mnu-btn'}/>}
            {activeStatus === true && <IconSVG id={'icon-modal-close-btn'}/>}
        </button>
    );
};