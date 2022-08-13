const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 8080,
    },

    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'index',
            template: path.resolve(__dirname, './src/pages/index.html'), // шаблон
            filename: 'index.html', // ім'я вихідного файлу
        }),

        new HtmlWebpackPlugin({
            title: 'about',
            template: path.resolve(__dirname, './src/pages/about.html'), // шаблон
            filename: 'about.html', // ім'я вихідного файлу
        }),

        new CleanWebpackPlugin(),
    ]
}