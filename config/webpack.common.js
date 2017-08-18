let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let helpers = require('./helpers');

module.exports = {
    // All entry files to find and incorporate dependencies for
    entry: {
        // Standard polyfills we require to run Angular applications in modern browsers
        'polyfills': './src/polyfills.ts',
        // Vendor files we need (angular, lodash, semantic.css, etc.)
        'vendor': './src/vendor.ts',
        // Our application code
        'app': './src/main.ts'
    },

    // Resolves import statements that don't mention an extension at all (first searches for the file with no extension, then *file*.ts, then *file*.js)
    resolve: {
        extensions: ['', '.ts', '.js', '.less']
    },

    module: {
        loaders: [
            // 'angular2-template-loader' - Loads Angular components' template and styles
            // 'awesome-typescript-loader' - Transpiles our Typescript code to ES5, guided by the tsconfig.json file
            // Webpack processes our loaders from right to left ('angular2-template-loader' first, then 'awesome-typescript-loader')
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            // Bundles component templates
            {
                test: /\.html$/,
                loader: 'html'
            },
            // Bundles images and fonts
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                // loader: 'file?name=assets/[name].[hash].[ext]'
                loader: 'file?name=assets/[name].[ext]'
            },
            // LESS
            // Webpack processes from right to left ('less-loader' first, then 'raw-loader', etc.)
            // Exclamation marks are chaining/piping (again, from right to left)
            {
                test: /\.less$/,
                loaders: ['css-to-string-loader','css-loader','less-loader']
            },
            // CSS
            // Webpack process from right to left ('css-loader' first, then 'style-loader')
            {
                test: /\.css$/,
                // exclude: helpers.root('src', 'app'),
                loaders: ['style-loader', 'css-loader']
            }
        ]
    },

    plugins: [
        // Identifies hierarchy among three chunks: app->vendor->polyfills (where Webpack finds that 'app' has shared dependencies with 'vendor,' it removes them from 'app')
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        // Injects scripts and links into index.html for us
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),

        // Allows the use of jQuery
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),

        // Manually copy our favicon to dist
        new CopyWebpackPlugin([{
            from: './src/public/assets/images/global/favicon.ico',
            to: 'assets/'
        }]),

        // Manually copy our CNAME file to dist for domain mapping
        new CopyWebpackPlugin([{
            from: './CNAME',
            to: './'
        }]),

        // Manually copy our roster photos to dist
        new CopyWebpackPlugin([{
            from: './src/public/assets/images/team/roster/',
            to: 'assets/'
        }])
    ]
};
