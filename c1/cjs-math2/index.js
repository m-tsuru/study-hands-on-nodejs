/*

# 1.4.7.1 module.exports と require() | 2

モジュールのインポートはまとめて行える
require('./cjs-math2') を実行すると、`./cjs-math2/index.js` がロードされる 

*/

module.exports = {
    add: require('./add'),
    subtract: require('./subtract'),
// モジュールのインポートは JSON ファイルでも可能。
    json: require('./key-value.json')
}