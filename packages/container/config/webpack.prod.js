const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
    },
    optimization: {
        runtimeChunk: false,
        splitChunks: {
            default: {
              idHint: "",
              reuseExistingChunk: true,
              minChunks: 2,
              priority: -20
            },
            defaultVendors: {
              idHint: "vendors",
              reuseExistingChunk: true,
              test: NODE_MODULES_REGEXP,
              priority: -10
            }
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                webApp: `webApp@${domain}/remoteEntry.js`
            },
            shared: packageJson.dependencies
        })
    ]
};

module.exports = merge(commonConfig, prodConfig);