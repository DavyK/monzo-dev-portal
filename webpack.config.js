var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 9000
    },
    entry: APP_DIR + '/js/index.js',
    module : {
        rules : [{
            test : /\.js?/,
            include : APP_DIR,
            loader : 'babel-loader',
            options: {
                presets: ['env', 'react'],
            },
        }],
    },
    devtool: 'sourcemap',
    output: {
        path: path.resolve(__dirname),
        filename: 'dist/js/index.js',
    },
};

module.exports = config;
