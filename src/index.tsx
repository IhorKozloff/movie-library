import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import './index.css';
import { Provider } from 'react-redux';
import { eyeshieldStore, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

const rootEl = document.getElementById('root') as HTMLDivElement;

ReactDOM.createRoot(rootEl).render(

    <Provider store={eyeshieldStore}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter basename="/movie-library">
            
                <App />
        
            </BrowserRouter>
        </PersistGate>
    </Provider>
);
