require('shelljs/global');
const path = require('path');
const istanbul = require('istanbul');
const appConfig = require('./webpack_data.js');
const debug = require('debug')('react-app');

const outFile = path.join(appConfig.coverage.dst, appConfig.coverage.jsonReMapped);

const cmd = [
    'node',
    'node_modules/remap-istanbul/bin/remap-istanbul',
    '-i',
    path.join(appConfig.coverage.dst, appConfig.coverage.jsonName),
    '-o',
    outFile,
    '-t json'
];

debug('Executing: %s', cmd.join(' '));
if (exec(cmd.join(' ')).code === 0) {

    const collector = new istanbul.Collector();
    const reporter = new istanbul.Reporter(false, appConfig.coverage.dst);

    // Include only relevant coverage data
    const remappedJson = require(path.join('..', outFile));
    const coverage = Object.keys(remappedJson).reduce((result, source) => {
        if (source.match(/^src\/.*\.js$/)) {
            result[source] = remappedJson[source];
        }

        return result;
    }, {});

    collector.add(coverage);

    // Create HTML report
    reporter.add('html');
    reporter.write(
        collector,
        true,
        () => console.log('HTML coverage report successfully created to ' + appConfig.coverage.dst)
    );

    // Create text report
    reporter.add('text');
    reporter.write(
        collector,
        true,
        () => console.log('Showing text based coverage report.')
    );
}
