import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import {Section, Container, Header, FooterSection} from 'components';
import { setPageStatus, useAppDispatch, useAppSelector } from 'store';

export default function LibraryPage () {

    const { pageStatus, theme }  = useAppSelector((state) => state.userTheme);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (pageStatus === 'library') {
            return;
        } else {
            dispatch(setPageStatus('library'));
        }
    }, [dispatch, pageStatus]);

    return (

        <>
            <Header/>

            <Section  className="main" backgroundTheme={theme}>
                <Container>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Outlet/>
                    </Suspense>
                </Container>
            </Section>

            <FooterSection/>   
        </>
        
    );
};