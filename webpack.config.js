const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: path.join(__dirname, "src/index.js")
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules)/,
        use: ["babel-loader"],
      },
      {
            test: /\.scss$/i,
            use: ["style-loader","css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/assets/images/*',
          to: 'assets/images',
          flatten: true,
        },
      ],
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "./src/index.html"),
      chunks: ["main"]
    }),
    new HtmlWebpackPlugin({
      filename: "cookies.html",
      template: path.join(__dirname, "./src/cookies.html"),
      chunks: ["main"]
    }),
    new HtmlWebpackPlugin({
      filename: "mlegales.html",
      template: path.join(__dirname, "./src/mlegales.html"),
      chunks: ["main"]
    })
  ],
  stats: "minimal",
  devtool: "source-map",
  mode: "development",


  devServer: {
   open: true,
   // contentBase: "./dist",
   // inline: true,
   port: 4000
 }
};

/* devServer: {
  open: false,
  contentBase: "./dist",
  inline: false,
  port: 4000
}*/

/*
devServer: {
 open: false,
   static: path.resolve(__dirname, './dist'),
     port: 4000
}
*/
