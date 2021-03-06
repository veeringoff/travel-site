module.exports = {
    entry: {
        App: "./app/assets/scripts/App.js",
        Vendor: "./app/assets/scripts/Vendor.js"
    },
    output: {
        path: "./app/temp/scripts",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                loader: 'babel',
                query: {
                    presets: ['es2015']
                },
                /* the following odd-looking code says only apply modifications to javascript files */
                test: /\.js$/,
                /* process none of the files in the following folder - babel only files we've written! */
                exclude: /node_modules/
            }
        ]
    }
}