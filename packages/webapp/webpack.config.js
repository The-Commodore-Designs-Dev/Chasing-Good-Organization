const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [
    /* mapped paths to share */
    'home',
    'pages/about',
    'pages/submit-your-story',
    'pages/meet-some-nominees',
    'pages/contact-us',
    'terms-of-use',
    'privacy-policy',
  ]);

module.exports = {
  output: {
    publicPath: "auto",
    scriptType: 'text/javascript',
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
    fallback: {
      "crypto": false
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: 'module' },

        // For remotes (please adjust)
        name: "webApp",
        filename: "remoteEntry.js",
        exposes: {
           './AppModule': './src/app/app.module.ts',
        },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "mfe1": "http://localhost:3000/remoteEntry.js",

        // },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/animations": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/cdk": { singleton: true, strictVersion: true, requiredVersion: 'auto', includeSecondaries: true },
          "@angular/compiler": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/elements": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/forms": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/material": { singleton: true, strictVersion: true, requiredVersion: 'auto', includeSecondaries: true },
          "@angular/platform-browser": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/platform-browser-dynamic": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@fortawesome/angular-fontawesome": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@fortawesome/fontawesome-svg-core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@fortawesome/free-brands-svg-icons": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@fortawesome/free-regular-svg-icons": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@fortawesome/free-solid-svg-icons": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "aws-amplify": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};
