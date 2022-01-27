let webpackMerge = require('webpack-merge');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let commonConfig = require('./webpack.common.js');
let helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    // Dev tool for allowing the ability to set breakpoints
    devtool: 'inline-source-map',

    // Webpack keeps our files in memory instead of writing them to the disk
    output: {
        // Write our output to a dist folder in the current directory (Spring adds it to the classpath so it can host it)
        path: helpers.root('dist'),
        // Host our files in memory from our dev-server
        publicPath: 'http://localhost:3000/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        // Extracts css from javascript bundles and puts them into an external css file (htmlWebpackPlugin inscribes as a <link> tag into index.html)
        new ExtractTextPlugin('[name].css')
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        port: 3000
    }
});
