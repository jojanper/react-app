const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: './dist/bundle.js'
    },
    module: {
        loaders: [
            // Linting
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                enforce: 'pre',
                query: {
                    configFile: path.join(__dirname, '.eslintrc')
                }
            },

            // JavaScript transpiling
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },

            // LESS styles
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },

            // CSS styles
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },

            // SASS styles
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },

            // Inline base64 URLs for <=8k images, direct URLs for the rest
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    }
};
