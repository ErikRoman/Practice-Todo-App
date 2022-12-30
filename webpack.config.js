const path = require( 'path' )


module.exports = {
    entry: [ 'babel-polyfill', './src/index.js' ],

    output: {
        path: path.resolve( __dirname, 'public/script' ),
        filename: 'bundle.js'
    },

    module: {
        rules: [ {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [ 'env' ]
                }
            }
        } ]
    },

    devServer: {
        contentBase: path.resolve( __dirname, 'public' ),
        publicPath: '/script/'
    },

    devtool: 'source-map'
}