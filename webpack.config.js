const webpack = require('webpack');

module.exports={
    entry: "./src/index.js",
    output:{
        path: __dirname + '/public/build/',
        publicPath: "build/",
        filename: "bundle.js"
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: [/node-modules/,/public/]
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!postcss-loader",
                exclude: [/node-modules/,/public/]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                loader: 'file-loader?name=img/[path][name].[ext]'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]'
            },
            {
                test: /\.jsx$/,
                loader: "babel",
                exclude: [/node-modules/,/public/]
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }

        ]
    }

};