module.exports = {

    entry: ['whatwg-fetch', "./js/app.jsx"] ,

    output: {
        filename: "./js/out.js"
    },

    watch: true,
    module: {

        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2015' , 'stage-2' , 'react']
                }
            },

            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },

            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },

    devServer: {
        inline: true,
        filename: './js/out.js',
        contentBase: './',
        port: 3001
    }
}
