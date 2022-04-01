import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { createMemoryHistory, createBrowserHistory } from 'history';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify from 'aws-amplify';
import amplify from './aws-exports';
Amplify.configure(amplify);

// const mount =  (el, {onNavigate, defaultHistory, initialPath}) => {
//   const history =
//   defaultHistory ||
//   createMemoryHistory({
//     initialEntries: [initialPath],
//   });

//   if (onNavigate) {
//     history.listen(onNavigate)
//   }

      // return {
      //   onParentNavigate({ pathname: nextPathname }) {
      //     const { pathname } = history.location;

      //     if (pathname !== nextPathname) {
      //       history.push(nextPathname);
      //     }
      //   },
      // };
// }

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

//export { mount };