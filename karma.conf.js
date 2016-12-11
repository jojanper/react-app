const appConfig = require('./scripts/webpack_data.js');
const loaders = appConfig.moduleLoaders;

module.exports = function (config) {
    config.set({
        basePath: '',
        browsers: [process.env.CONTINUOUS_INTEGRATION ? 'PhantomJS' : 'Chrome'],
        singleRun: true,
        frameworks: ['mocha'],
        files: [
            'tests.webpack.js'
        ],
        preprocessors: {
            'tests.webpack.js': ['webpack', 'sourcemap', 'sourcemap-writer', 'coverage'],
        },
        reporters: ['mocha', 'coverage'],
        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: loaders
            }
        },
        webpackServer: {
            noInfo: true
        },
        coverageReporter: {
            subdir: '.',
            dir : appConfig.coverage.dst,
            type: appConfig.coverage.type,
            file: appConfig.coverage.jsonName
        }
    });
};
