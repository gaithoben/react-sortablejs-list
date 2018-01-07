import { join } from 'path';
const CKEditorWebpackPlugin = require('@ckeditor/ckeditor5-dev-webpack-plugin');

const include = join(__dirname, 'src');

export default {
  plugins: [
    // ...

    new CKEditorWebpackPlugin({
      // See https://ckeditor5.github.io/docs/nightly/ckeditor5/latest/features/ui-language.html
      languages: ['pl'],
    }),
  ],

  entry: './src/index',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'react-ckeditor5',
  },
  devtool: 'source-map',
  module: {
    loaders: [],

    rules: [
      { test: /\.js$/, loader: 'babel-loader', include },
      { test: /\.json$/, loader: 'json-loader', include },
      { test: /\.css$/, loader: 'css-loader', include },
      {
        // Or /ckeditor5-[^/]+\/theme\/icons\/[^/]+\.svg$/ if you want to limit this loader
        // to CKEditor 5's icons only.
        test: /\.svg$/,

        use: ['raw-loader'],
      },
      {
        // Or /ckeditor5-[^/]+\/theme\/[^/]+\.scss$/ if you want to limit this loader
        // to CKEditor 5's theme only.
        test: /\.scss$/,

        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              minimize: true,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  externals: {
    react: 'commonjs react', // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
  },
};
