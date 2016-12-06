module.exports = function (config) {
    config.set({
        browsers: [process.env.CONTINUOUS_INTEGRATION ? 'Firefox' : 'Chrome'],
        singleRun: true,
        frameworks: ['mocha'],
        files: [
            'tests.webpack.js'
        ],
        preprocessors: {
            'tests.webpack.js': ['webpack', 'sourcemap']
        },
        reporters: ['dots'],
        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
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
                    }
                ]
            }
        },
        webpackServer: {
            noInfo: true
        }
    });
};
