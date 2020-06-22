const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev


module.exports = {
    mode: 'development',
    entry:{
        main: './src/index.js',
    } ,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist') 
    },
    devServer: {
        port: 4200,
        hot: isDev
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'colors.html',
            template: './src/pages/colors.pug',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),

    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev,
                            reloadAll: true
                        },
                    },
                    'css-loader',
                ],
            },{
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev,
                            reloadAll: true
                        },
                    },
                    'css-loader',
                    'sass-loader'
                ],
            },{
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },{
                test: /\.(ttf|woff|woff2|eot|svg)$/,
                use: ['file-loader']
            },{
                test: /\.pug$/,
                use: ['pug-loader']
            }
            
        ]
    }
}