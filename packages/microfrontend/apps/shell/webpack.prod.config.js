const { withModuleFederation } = require('@nrwl/angular/module-federation');
const config = require('./module-federation.config');
module.exports = withModuleFederation({
  ...config,
  /*
   * Remote overrides for production.
   * Each entry is a pair of an unique name and the URL where it is deployed.
   *
   * e.g.
   * remotes: [
   *   ['app1', 'https://app1.example.com'],
   *   ['app2', 'https://app2.example.com'],
   * ]
   */
  remotes: [
    ['web', 'https://chasinggood.org:443/web'],
    ['form', 'https://chasinggood.org:443/form'],
    ['dashboard', 'https://chasinggood.org:443/dashboard']
  ],
});
