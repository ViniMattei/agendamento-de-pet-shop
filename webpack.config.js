const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');

module.exports = {
  target: "web",
  mode: "development",

 entry: path.resolve(__dirname, "src" , "js" , "main.js"), 
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  devServer:  {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    liveReload: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      favicon: path.resolve(__dirname, "src", "assets", "Dog.svg"),
    }),
    new CopyWebPackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets"),
          to: path.resolve(__dirname, "dist", "src" , "assets"),
        },
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
}