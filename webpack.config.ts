import { Configuration } from "webpack";
import * as path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";


const config: Configuration = {
    entry: {
        main: path.join(__dirname, "src", "main.ts")
    },
    target: "web",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            url: false
                        }
                    },
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                { from: path.join(__dirname, "assets"), to: "assets" }
            ]
        })
    ],
    resolve: {
        extensions: [ ".js", ".jsx", ".ts", ".tsx", ".otf" ]
    }
};

export default config;
