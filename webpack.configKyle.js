const path=require('path')
const webpack=require('webpack')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const VueLoaderPlugin=require('vue-loader/lib/plugin')
const { resolve } = require('path');

const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const { CleanWebpackPlugin }=require('clean-webpack-plugin')
const HardSourceWebpackPlugin=require('hard-source-webpack-plugin')
const optimizeCssAssetsWebpackPlugin=require('optimize-css-assets-webpack-plugin')


module.exports={
    mode:'development',
    entry:'./src/index.js',
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: "output.bundle.[hash:8].js",
        chunkFilename: '[name].bundle.js',
        publicPath: "/"  //如果有二级路由需要加，不然会报错
    },
    devServer: {
        contentBase:path.join(__dirname,'dist'),
        compress:true,
        port:8081,
        hot:true,
        open:true,
        historyApiFallback:{
            index:'/index.html'
        }
    },
    module: {
        rules: [
            {
                test:/\.vue$/,
                loader:'vue-loader',
            },
            {
                test:/\.css$/,
                use:[
                    // MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader',
                    {
                        loader:'postcss-loader',
                        options:{
                            plugins:[
                                require('autoprefixer')
                            ]
                        }
                    }
                ]
            },
            {
                test:/\.less$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test:/\.js$/,
                //即使这里用的是happypack，但是也要install babel-loader
                loader: 'happypack/loader?id=happyBabel',
                //排除node_modules 目录下的文件
                // exclude: /node_modules/
                include:path.resolve('src'),
                // exclude: /(node_modules|bower_components)/,
                // use: {
                //     loader: 'babel-loader',
                //     options: {
                //         presets: ['@babel/preset-env']
                //     }
                // }
            },
            {
                test:/\.(png|jpg|svg|gif)/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:20*1024,
                            esModule:false,
                        }
                    }
                ]
            },
            // {
            //     test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
            //     use:[
            //         "file-loader",
            //         "url-loader"
            //     ]
            // },
            {
                test: /\.(woff|eot|ttf|otf)(\?.*)?$/i,
                use: [
                    /* config.module.rule('fonts').use('file-loader') */
                    {
                        loader: 'url-loader',
                        options: {
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'fonts/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
        ]
    },
    devtool: 'eval-source-map',
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HardSourceWebpackPlugin(),
        new webpack.BannerPlugin('make by kyle'),
        new HtmlWebpackPlugin({
            title:'ZolPhoto',
            filename: "index.html",
            template: "./src/template.html"
        }),
        new optimizeCssAssetsWebpackPlugin({
            cssProcessor: require('cssnano'), //引入cssnano配置压缩选项
            cssProcessorOptions: {
                discardComments: { removeAll: true }
            },
            canPrint: true //是否将插件信息打印到控制台
        }),
        new HappyPack({
            //用id来标识 happypack处理那里类文件
            id: 'happyBabel',
            //如何处理  用法和loader 的配置一样
            loaders: [{
                loader: 'babel-loader?cacheDirectory=true',
            }],
            //共享进程池
            threadPool: happyThreadPool,
            //允许 HappyPack 输出日志
            verbose: true,
        }),
        new MiniCssExtractPlugin({
            // 类似 webpackOptions.output里面的配置 可以忽略
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            vue: 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            // '@':path.join(__dirname,'./src'),
        },
    },
}
