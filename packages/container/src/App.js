import React, { lazy, Suspense} from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import Header from './components/Header';

const WebAppLazy = lazy(() => import('./components/WebsiteApp'));

export default () => {
    return (
        <Router>
            <div>
                <Header />
                <Suspense fallback={"Loading..."}>
                    <Switch>
                        <Route exact path="/" component={WebAppLazy} />
                    </Switch>
                </Suspense>                
            </div>
        </Router>
    );
}