const config = require('./scripts/webpack_data.js');

module.exports = {
    entry: config.entry,
    output: {
        filename: config.distFile,
    },
    module: {
        loaders: [config.eslint].concat(config.moduleLoaders)
    }
};
