const path = require('path');

const appSrc = [path.resolve(__dirname, '../src')];
const buildDst = './build';

module.exports = {

    // eslint config for module.loaders
    'eslint': {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre',
        query: {
            configFile: path.join(__dirname, '../.eslintrc')
        }
    },

    // Applied loaders
    'moduleLoaders': [

        // JavaScript transpiling
        {
            test: /\.js$/,
            loader: 'babel-loader',
            include: appSrc,
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        },

        // LESS styles
        {
            test: /\.less$/,
            include: appSrc,
            loader: 'style-loader!css-loader!less-loader'
        },

        // CSS styles
        {
            test: /\.css$/,
            include: appSrc,
            loader: 'style-loader!css-loader'
        },

        // SASS styles
        {
            test: /\.scss$/,
            include: appSrc,
            loader: 'style-loader!css-loader!sass-loader'
        },

        // Inline base64 URLs for <=8k images, direct URLs for the rest
        {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }
    ],

    // Application source folder
    'appSrc': appSrc,

    // The entry point for the bundle
    'entry': [appSrc, '/', 'main.js'].join(''),

    // Name of output bundle file on disk
    'distFile': './dist/bundle.js',

    // Build folder (used for testing etc)
    'buildDst': buildDst,

    'coverage': {
        // Code coverage reports folder
        'dst': buildDst + '/coverage',
        'type': 'json',
        'jsonName': 'coverage-final.json',
        'jsonReMapped': 'coverage-remapped.json'
    }
};
