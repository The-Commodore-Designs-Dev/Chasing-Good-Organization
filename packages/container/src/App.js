import React, { lazy, Suspense} from 'react';
import { Route, Router, Switch, useLocation } from 'react-router-dom';

import Header from './components/Header';

const WebAppLazy = lazy(() => import('./components/WebsiteApp'));

export const LocationDisplay = () => {
    const location = useLocation();

    return <div data-testid="location-display">{location.pathname}</div>
}

export default () => {
    return (
        <Router>
            <div>
                <Header />
                <Suspense fallback={"Loading..."}>
                    <Switch>
                        <Route exact path="/" component={WebAppLazy} />
                    </Switch>

                    <LocationDisplay />
                </Suspense>                
            </div>
        </Router>
    );
}