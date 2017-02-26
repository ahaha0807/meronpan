import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const src  = path.resolve(__dirname, 'src')

export default {
  // 書き出すJSXのエントリーポイント
  entry: {
    index: src + '/entry/index.jsx',
    show: src + '/entry/show.jsx',
    create: src + '/entry/create.jsx'
  },
  // 書き出させるJSのファイル名
  output: {
    filename: 'dist/assets/js/[name].bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  // 吐き出させる HTML ファイルの一覧
  // src/(index|create|show).html を元にscriptタグを追加してくれる
  plugins: [
    new HtmlWebpackPlugin({
      template: src + '/index.html',
      filename: 'dist/index.html',
    }),
    new HtmlWebpackPlugin({
      template: src + '/create.html',
      filename: 'dist/create.html',
    }),
    new HtmlWebpackPlugin({
      template: src + '/show.html',
      filename: 'dist/show.html',
    })
  ]
}