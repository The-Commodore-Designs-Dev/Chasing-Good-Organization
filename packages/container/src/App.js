import React, { lazy, Suspense} from 'react';
import { Route, Router, Switch, useLocation } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Header from './components/Header';

const WebAppLazy = lazy(() => import('./components/WebsiteApp'));

const history = createBrowserHistory();

export const LocationDisplay = () => {
    const location = useLocation();

    return <div data-testid="location-display">{location.pathname}</div>
}

export default () => {
    return (
        <Router history={history}>
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