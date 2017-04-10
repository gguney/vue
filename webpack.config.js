var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var inProduction = (process.env.NODE_ENV === 'production');
var inHot = (process.env.NODE_ENV === 'hot');

module.exports = {
    entry: {
        app: [
            './src/main.js',
            './src/assets/css/main.scss'
        ]
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js',
        /*filename: '[name].[chunkhash].js'*/
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.s[ac]ss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']

            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
                //use: "file-loader?name=[name].[ext]&publicPath=./dist&outputPath=/images/",//only vue
                //use: "file-loader?name=[name].[ext]&publicPath=./&outputPath=images/",//only main.scss
                use: "file-loader?name=[name].[ext]&publicPath=./&outputPath=images/",
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015"]
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        /*new ExtractTextPlugin('[name].[chunkhash].css'),*/
        new webpack.LoaderOptionsPlugin({
            minimize: inProduction
        }),
        new CleanWebpackPlugin(['dist', 'build'], {
            root: __dirname,
            verbose: true,
            dry: false
        }),

        function (){
            if(!inHot){
                this.plugin('done', stats=>{
                    require('fs').writeFileSync(
                        path.join(__dirname, 'build/manifest.json'),
                        JSON.stringify(stats.toJson().assetsByChunkName)
                    );
                });
            }

        }
    ]
}

if (inProduction) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin()
    );
}