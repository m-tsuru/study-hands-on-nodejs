/*

モジュールをインポートするときは、次のように記述する

const math = require('./cjs-math') 

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