var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        main: './al',
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".js", ".ts"]
    },
    output: {
        publicPath: "/js/",
        path: path.join(__dirname, '/js/'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }
};
