import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

const mode = 'development';
if(process.env.NODE_ENV === 'production') {
  mode = 'production';
};

const config = {
  entry: ['./src/main.js'],
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ],
  module: {
    rules: [
      { test: /\.m?js/,
        resolve: { fullySpecified: false },
        exclude: [
          /node_modules/,
          /\.worker\.js$/
        ]
      },
      { test: /\.worker\.js$/, loader: 'worker-loader' },
    ],
  },
  output: {
    path: path.join(process.cwd(), 'public/index.html'),
  }
};

export default config;