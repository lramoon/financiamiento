const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: "./src/js/main.js", // Main principal
    output: {
        path: __dirname + "/dist/v1/js/",
        filename: "bundle.js",
    },
    mode: "production", //'development' o 'production' para la configuración de producción
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
};