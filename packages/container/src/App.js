import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import WebsiteApp from './components/WebsiteApp';
import Header from './components/Header';

export default () => {
    return (
        <BrowserRouter>
            <React.Suspense fallback="Loading...">
                <Header />
                <WebsiteApp />
            </React.Suspense>
        </BrowserRouter>
    );
}