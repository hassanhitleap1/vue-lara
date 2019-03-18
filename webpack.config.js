let webpack= require('webpack');
let  path=require('path');
module.exports={
    entry:{
        app:'./resources/assets/js/app.js',
        vendor:['vue','axios']
    },
    output:{
        path:path.resolve(__dirname,'public/js'),
        filename:'[name].js',
        publicPath:'./public'
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.common.js'
        }
    },
    module:{
        rules:[
            {
                text:/\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins:[

        new webpack.optimize.CoummonsChunksplugin({

        })
    ]
};

if(process.NODE_ENV==='production'){
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
           sourcemap:true,
           compress:{
               warnings:false
           } 
        })
    )
    module.exports.plugins.push(
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:'production'
            }

        })
    )
}