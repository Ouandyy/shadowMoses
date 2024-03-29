module.exports = {
  entry: __dirname + "/client/src/index.jsx",
  module: {
    rules: [
      {
        test: [/\.js[x]$/],
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"]
          }

        }]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/client/dist"
  }
};