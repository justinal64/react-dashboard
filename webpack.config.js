const webpack = require("webpack"); // webpack itself
const path = require("path"); // nodejs dependency when dealing with paths
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin"); // require webpack plugin
const UglifyJsPlugin = require("uglifyjs-webpack-plugin"); // require webpack plugin
const OptimizeCSSAssets = require("optimize-css-assets-webpack-plugin"); // require webpack plugin

let config = {
  // config object
  entry: "./src/index.js", // entry file
  output: {
    // output
    path: path.resolve(__dirname, "public"), // output path
    filename: "output.js" // output filename
  },
  resolve: {
    // These options change how modules are resolved
    extensions: [
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
      ".json",
      ".scss",
      ".css",
      ".jpeg",
      ".jpg",
      ".gif",
      ".png"
    ], // Automatically resolve certain extensions
    alias: {
      // Create aliases
      images: path.resolve(__dirname, "src/assets/images") // src/assets/images alias
    }
  },
  module: {
    rules: [
      // loader rules
      {
        test: /\.tsx?$/,
        exclude: /node_modules/, // exclude the node_modules directory
        loader: "ts-loader"
      },
      {
        test: /\.js$/, // files ending with .js
        exclude: /node_modules/, // exclude the node_modules directory
        loader: "babel-loader" // use this (babel-core) loader
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
        include: /flexboxgrid/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.jsx$/, // all files ending with .jsx
        loader: "babel-loader", // use the babel-loader for all .jsx files
        exclude: /node_modules/ // exclude searching for files in the node_modules directory
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file-loader?context=src/assets/images/&name=images/[path][name].[ext]",
          {
            // images loader
            loader: "image-webpack-loader",
            query: {
              mozjpeg: {
                progressive: true
              },
              gifsicle: {
                interlaced: false
              },
              optipng: {
                optimizationLevel: 4
              },
              pngquant: {
                quality: "75-90",
                speed: 3
              }
            }
          }
        ],
        exclude: /node_modules/,
        include: __dirname
      }
    ] // end rules
  },
  plugins: [
    // webpack plugins
    new ExtractTextWebpackPlugin("styles.css") // call the ExtractTextWebpackPlugin constructor and name our css file
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "public"), // A directory or URL to serve HTML content from.
    historyApiFallback: true, // fallback to /index.html for Single Page Applications.
    inline: true, // inline mode (set to false to disable including client scripts (like livereload)
    open: true, // open default browser while launching
    compress: true, // Enable gzip compression for everything served:
    hot: true // Enable webpack's Hot Module Replacement feature
  },
  devtool: "inline-source-map" // enable devtool for better debugging experience original selection = eval-source-map
};

module.exports = config;

if (process.env.NODE_ENV === "production") {
  // if we're in production mode, here's what happens next
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin(), // call the uglify plugin
    new OptimizeCSSAssets() // call the css optimizer (minfication)
  );
}
