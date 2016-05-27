const cssnext = require('postcss-cssnext');
const cssimport = require('postcss-import');
const path = require('path');


module.exports = {
    module: {
        loaders: [
            {
                test: /\.css?$/,
                loaders: ['style', 'css-loader?modules&importLoaders=1&localIdentName=[local]-[hash:base64:5]', 'postcss-loader'],
                include: path.resolve(__dirname, '../')
            },

            {
                test : /\.json$/,
                loader  : 'json'
            },

            {
                test: /\.(png|jpe?g|gif|svg|mp3|mpe?g)$/,
                loader: "file-loader?name=static/assets/[name]-[hash:2].[ext]"
            }

        ]

    },


    cssLoader: {
        modules: true
    },

    postcss : [
        cssimport({path: path.normalize(`${__dirname}/../src/app`)}),
        cssnext()
    ]
}
