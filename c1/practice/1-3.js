/*

# 練習問題 1-3

1 から 10 までの数の積を計算するコード
console.log() を利用して途中経過も出力する

*/

'use strict'

let total = 1

for (let i = 1; i <= 10; i++) {
    total *= i
    console.log(`i = ${i} : ${total}`)
}

console.log(total)