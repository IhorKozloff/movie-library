import { Outlet } from 'react-router-dom';
import {Section, Container, Header, FooterSection} from 'components';
import { useAppSelector } from 'store';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';

export default function Layout () {

    const status  = useAppSelector((state) => state.userTheme.theme);
 
    return (
        <>
       
            <Header/>
            
            <Section  className="main" backgroundTheme={status}>
                <Container className="container">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Outlet/>
                    </Suspense>
                </Container>
            </Section>
            
            <FooterSection/>  
            <ToastContainer/>
        </>
    );
};
