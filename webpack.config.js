const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    bundle: "./app/app.module.ts"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "awesome-typescript-loader",
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".scss", ".html"]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "www/js")
  },
  externals: {
    angular: "angular"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendor: {
          test: /node_modules/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  }
};
