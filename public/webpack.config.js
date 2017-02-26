require('babel-core/register'); 
module.exports = require('./development');  // dev環境とpro環境の設定を切り替えるために、dev用ファイルを外部（development.js）においている