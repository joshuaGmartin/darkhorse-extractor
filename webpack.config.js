const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry file where your code starts
  output: {
    filename: "bundle.js", // Output file after bundling
    path: path.resolve(__dirname, "dist"), // Folder where bundled file will be placed
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Only process .js files
        exclude: /node_modules/, // Exclude node_modules folder
        use: "babel-loader", // Use Babel for transpiling (optional if you want ES6+ support)
      },
    ],
  },
  resolve: {
    extensions: [".js"], // Allows imports without the file extension
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"), // Serve content from dist folder
    compress: true, // Enable compression
    port: 9000, // Port to run the dev server
  },
};
