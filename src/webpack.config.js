const path = require('path');
const webpack = require('webpack');
module.exports = {
    context: path.resolve(__dirname, './js'),
    entry: {
        app: './behaviour.js',
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'badger-accordion.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015'],
                        plugins: [
                            'transform-object-assign',
                            'syntax-dynamic-import'
                        ]
                    }
                }
            }
        ]
    }
};