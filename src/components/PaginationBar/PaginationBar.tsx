import { PaginationListItem } from './PaginationBar.styled';
import { useEffect, useState } from 'react';

interface IProps {
    totalPages: number;
    setCurrentPage: (page: number) => void; 
    currentPage: number;
}

export const PaginationBar = ({totalPages, setCurrentPage, currentPage}: IProps) => {

    const [visibilityList, setVisibilityList] = useState<(string | number)[]>([]);

    function paginationStartArrCreator (current: number, total: number) {
    
        if (total > 5 ) {
            if (total - current <= 4) {
                return [total - 5, total - 4, total - 3, total - 2, total - 1, total]; 
            }

            if (current - 2 > 0) {
                return [current - 2, current - 1, current,  current + 1, current + 2, '...', total];
            }
            if (current - 1 > 0) {
                return [current - 1, current,  current + 1, current + 2, current + 3, '...',total];
            }
            if (current - 1 === 0) {
                return [current, current + 1, current + 2, current + 3, current + 4, '...',total];
            }
            if (current + 5 === total) {
                return [current - 2, current - 1, current,  current + 1, current + 2, '...',total];
            }
            if (current + 5 === total) {
                return [current - 2, current - 1, current,  current + 1, current + 2, '...',total];
            }
       
        } else {
            let items = [];
            for (let i = 1; i <= total; i += 1)  {
                items.push(i);
            };
            return items;
        }
        return [];
    }

    useEffect(() => {
        setVisibilityList(paginationStartArrCreator(Number(currentPage), Number(totalPages)));
    },[currentPage, totalPages]);

    const buttonClassNames = 'text-white cursor-pointer w-[25px] flex-center-center bg-inherit border-0';
    return (
        <div className="pagination-wrapper flex justify-center w-[220px] h-[40px] my-0 mx-auto">
            <ul className="flex-center-center">
                {
                    visibilityList.length > 0 && visibilityList.map(item => {
                        if (item === '...') {
                            return (
                                <PaginationListItem key={item} className="background-none">
                                    <button className={`${buttonClassNames}`} type="button">{item}</button>
                                </PaginationListItem>);
                        }
                        return item !== currentPage
                            ?  (
                                <PaginationListItem key={item}>
                                    <button className={`${buttonClassNames}`} type="button" onClick={() => {setCurrentPage(item as number);}}>{item}</button>
                                </PaginationListItem>
                            )
                            :  (
                                <PaginationListItem key={item} className="active-button" active>
                                    <button className={`${buttonClassNames}`} type="button" onClick={() => {setCurrentPage(item as number);}}>{item}</button>
                                </PaginationListItem>
                            );      
                    })
                }
            </ul>
        </div>
    );
};
