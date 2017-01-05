module.exports = {
  entry: "./src/js/scripts.js",
  output: {
    path: "static/js",
    filename: "scripts.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};
