/* eslint-env node */
const path = require(`path`);
const npmPackage = require(`./package.json`);
const browsers = [
    `last 2 versions`,
    `Explorer >= 10`,
    `Edge >= 12`,
    `iOS >= 8`
];

const entry = {};
entry[npmPackage.name] = `./index.js`;

module.exports = {
    context: path.resolve(__dirname, `./`),
    entry,
    output: {
        path: path.resolve(__dirname, `./dist`),
        filename: `[name].js`,
    },
    module: {
        rules: [
            {
                enforce: `pre`,
                test: /\.js$/,
                loader: `eslint-loader`,
                options: {
                    failOnWarning: false,
                    failOnError: true
                }
            },
            {
                test: /\.js$/,
                loader: `babel-loader`,
                exclude: /node_modules/,
                options: {
                    cacheDirectory: true,
                    presets: [
                        [`env`, {
                            targets: {
                                browsers
                            },
                            modules: false
                        }]
                    ]
                }
            }
        ]
    }
};