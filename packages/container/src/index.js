import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
    loadRemoteEntry({remoteEntry:'https://d2ldygdqblohqn.cloudfront.net/remoteEntry.js'})
])
.catch(err => console.error('Error loading remote entries', err))
.then(() => import('./bootstrap.js'))
.catch(err => console.error(err));
