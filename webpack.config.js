module.exports = {
    entry: './src/entry.ts',
    // output: {
    //     filename: 'app.js',
    //     path: path.resolve(__dirname, 'dist'),
    // },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            }, 
            {
                test: /\.(PNG|png|svg|jpg|gif)$/,
                use: [
                    "file-loader"
                ]
            }
        ],
    },
};