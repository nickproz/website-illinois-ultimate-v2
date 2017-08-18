let webpack = require('webpack');
let webpackMerge = require('webpack-merge');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let commonConfig = require('./webpack.common.js');
let helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'prod';

module.exports = webpackMerge(commonConfig, {
    // Dev tool for allowing the ability to set breakpoints
    devtool: 'source-map',

    // Webpack physically writes our files to the disk
    output: {
        // Write our output to a dist folder in the current directory (Spring adds it to the classpath so it can host it)
        path: helpers.root('dist'),

        // Comment this out to host locally vs hosting on github pages
        // publicPath: "/github-pages-path/",
        // publicPath: "/website-illinois-ultimate-v2/",

        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },

    htmlLoader: {
        minimize: false // workaround for ng2
    },

    plugins: [
        // Stops the build if there is any error
        new webpack.NoErrorsPlugin(),
        // Detects identical (and nearly identical) files and removes them from the output
        new webpack.optimize.DedupePlugin(),

        // Minifies the bundles (not available with ES6)
        new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
            mangle: {
                keep_fnames: true
            }
        }),

        // Extracts embedded css as external files, adding cache-busting hash to the filename
        new ExtractTextPlugin('[name].[hash].css'),
        // Used to define environment variables that we can reference within our application
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        })
    ]
});
