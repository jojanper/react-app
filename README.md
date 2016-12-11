[![Build Status](https://travis-ci.org/jojanper/react-app.svg?branch=master)](https://travis-ci.org/jojanper/react-app)

# react-app
> React application prototyping.

## Usage

### Install dependencies
```
npm install
```

### Start dev server
```
npm start
```

Start browser and goto to http://0.0.0.0:8001.

### Run JavaScript code styling (eslint)
```
npm run eslint
```

### Run unit tests
```
npm test
```

Creates both HTML and text based coverage reports. HTML coverage report is located in `build/coverage/index.html`.

### Run eslint + unit tests
```
npm run dev-test
```

### Build project
Build into `dist` directory.
```
npm run build
```

### Continuous Integration (CI)

#### Travis CI
https://travis-ci.org/jojanper/react-app

#### Jenkins
`Jenkinsfile.groovy` contains script to implement Pipeline as code workflow for Jenkins. For more details see
https://jenkins.io/solutions/pipeline/.

## What's Inside?

Application code uses React + Webpack + Babel + SCSS + LESS + CSS.

Unit testing is based on Karma + Mocha + Istanbul configuration. Code coverage creation uses remap-istanbul,
see https://github.com/jas-chen/karma-sourcemap-writer.