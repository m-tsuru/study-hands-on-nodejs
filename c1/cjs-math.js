/*

# 1.4.7.1 module.exports と require() | 2

モジュールのインポートはまとめて行える
require('./cjs-math2') を実行すると、`./cjs-math2/index.js` がロードされる 

*/


// モジュールのエクスポート

module.exports.add = (a, b) => a + b
module.exports.substract = (a, b) => a - b

// モジュールのエクスポート

module.exports = {
    add2: (a, b) => a + b,
    substract2: (a, b) => a - b
}

// モジュールのエクスポート

exports.add3 = (a, b) => a + b
exports.substract3 = (a, b) => a - b