// Karma configuration
// Generated on Fri May 12 2017 09:55:56 GMT+0200 (CEST)
/* eslint-env node */
const webpackConfig = require(`./webpack.config`);
// karma-webpack adds entries based on the files to load array
// e.g. for every test one entry
delete webpackConfig.entry;
if (!process.env.CI) {
    const eslintLoader = webpackConfig.module.rules.filter(rule => rule.loader === `eslint-loader`)[0];
    eslintLoader.options.failOnError = false;
}

module.exports = function(config) {
    const configuration = {

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: ``,


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: [`mocha`],


        // list of files / patterns to load in the browser
        files: [
            {pattern: `tests/**/*.js`, watched: false}
        ],


        // list of files to exclude
        exclude: [
        ],


        webpack: webpackConfig,


        webpackMiddleware: {
            stats: `errors-only`
        },


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'tests/**/*.js': [`webpack`]
        },


        // test results reporter to use
        // possible values: `dots`, `progress`
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: [`mocha`],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [`ChromeHeadless`, `FirefoxHeadless`],


        customLaunchers: {
            FirefoxHeadless: {
                base: `Firefox`,
                flags: [`-headless`]
            }
        },


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    };

    if (process.env.CI) { 
        configuration.browsers = [`ChromeHeadless`, `FirefoxHeadless`]; 
        configuration.concurrency = 1;
        configuration.singleRun = true;
    }

    config.set(configuration);
};
