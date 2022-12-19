const path = require('path')

module.exports = {
    entry: ['babel-polyfill', './src/index.js'], //This is a path (relative path) to the place where the code lives 
    output: {
        path: path.resolve(__dirname, 'public/scripts'), //This contains the path (absolute path) to where we want to save the webpack output,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env'],
                    plugins: ['transform-object-rest-spread']
                }
            }
        }]
    },
    devServer: {
        contentBase: path.resolve( __dirname, 'public' ),
        publicPath: '/scripts/'
    },
    devtool: 'source-map'
}
